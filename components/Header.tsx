interface Props {
  children: React.ReactNode;
}

export const Header = ({ children }: Props) => {
  return <header className='py-14'>{children}</header>;
};
