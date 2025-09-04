export interface IButtonProps {
    title: string;
    className?: string;
    disable?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}