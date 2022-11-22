export enum StyleTitles {
  ShowNumber = 'show-number',
  Visible = 'visible',
  Select = 'select',
  Hide = 'hide',
}

export interface ICardItemProps {
  index: number;
  visibleNumber: number;
  style: StyleTitles;
  selectCard: (index: number) => void;
}
