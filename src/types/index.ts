export interface ICardItemProps {
  index: number;
  visibleNumber: number;
  style: string;
  selectCard: (index: number) => void;
}
