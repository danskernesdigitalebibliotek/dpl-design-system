export type LinksProps = {
  href: string;
  linkText: string;
  classNames?: string;
};

export const Links = (props: LinksProps) => {
  const { href, linkText, classNames } = props;

  return (
    <a href={href} className={classNames}>
      {linkText}
    </a>
  );
};
