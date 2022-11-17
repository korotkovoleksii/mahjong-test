export type StyleLiteral = 'show-number' | 'visible' | 'select' | 'hide';
export interface ICardItemProps {
  index: number;
  visibleNumber: number;
  style: StyleLiteral;
  selectCard: (index: number) => void;
}
