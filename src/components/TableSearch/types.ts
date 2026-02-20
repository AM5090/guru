export interface TableSearchProps {
  title: string;
  className?: string;
  value: string;
  changeValue: (value: string) => void;
  clickToSearch?: () => void;
}
