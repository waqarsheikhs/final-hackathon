import Button from '@mui/material/Button';
import "./css/style.css"

export default function BasicButtons({onClick,variant,type,fullWidth,children}) {
  return (
    <Button onClick={onClick} className="hello" variant={variant} type={type} fullWidth={fullWidth}>{children}</Button>
  );
}