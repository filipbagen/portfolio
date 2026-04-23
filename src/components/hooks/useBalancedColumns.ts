import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';

interface BalancedColumnsResult<T> {
  isDesktop: boolean;
  leftColumn: T[];
  rightColumn: T[];
  measurementRefs: MutableRefObject<Record<string, HTMLDivElement | null>>;
}

export function useBalancedColumns<T extends { id: string }>(
  items: T[],
  mediaQuery = '(min-width: 768px)'
): BalancedColumnsResult<T> {
  const measurementRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [isDesktop, setIsDesktop] = useState(false);
  const [heights, setHeights] = useState<Record<string, number>>({});

  useEffect(() => {
    const query = window.matchMedia(mediaQuery);
    const onChange = () => setIsDesktop(query.matches);
    onChange();
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [mediaQuery]);

  useEffect(() => {
    if (!isDesktop || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(() => {
      const nextHeights: Record<string, number> = {};

      for (const item of items) {
        const element = measurementRefs.current[item.id];
        if (element) nextHeights[item.id] = element.offsetHeight;
      }

      setHeights((previous) => {
        const changed = items.some(
          (item) => previous[item.id] !== nextHeights[item.id]
        );
        return changed ? nextHeights : previous;
      });
    });

    for (const item of items) {
      const element = measurementRefs.current[item.id];
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [isDesktop, items]);

  const columns = useMemo(() => {
    const leftColumn: T[] = [];
    const rightColumn: T[] = [];

    if (!isDesktop) {
      return { leftColumn: items, rightColumn };
    }

    let leftHeight = 0;
    let rightHeight = 0;

    for (const item of items) {
      const itemHeight = heights[item.id] ?? 1;
      if (leftHeight <= rightHeight) {
        leftColumn.push(item);
        leftHeight += itemHeight;
      } else {
        rightColumn.push(item);
        rightHeight += itemHeight;
      }
    }

    return { leftColumn, rightColumn };
  }, [heights, isDesktop, items]);

  return { isDesktop, ...columns, measurementRefs };
}
