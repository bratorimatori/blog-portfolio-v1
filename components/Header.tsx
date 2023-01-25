interface Props {
  children: React.ReactNode;
}

export const Header = ({ children }: Props) => {
  return <header className='py-12'>{children}</header>;
};
