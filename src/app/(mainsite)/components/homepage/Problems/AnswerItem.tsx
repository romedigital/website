import styles from "./problems.module.css"

export default function AnswerItem(props: {title: string}) {
  return (
        <div className={styles.problemItem}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path fill="currentColor" fillRule="evenodd" d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24m10.788-32.07a1.714 1.714 0 0 0-2.425 0L25.43 30.867a1.716 1.716 0 0 1-2.425 0l-3.22-3.221a1.714 1.714 0 0 0-2.425 2.424l5.645 5.645c.67.67 1.755.67 2.425 0l13.359-13.359c.67-.67.67-1.755 0-2.424"></path></svg> <span>{props.title}</span></div>
  )
}
