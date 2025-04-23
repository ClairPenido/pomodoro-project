import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  //   const { children } = props; = {children}:HeadingProps (chama-se desestruturação)
  return <h1 className={styles.heading}>{children}</h1>;
}
