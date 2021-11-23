import s from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <head>
        <title> Posts | Ignews</title>
      </head>

      <main className={s.container}>
        <div className={s.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Nome do post</strong>
            <p>Informações sobre o post</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Nome do post</strong>
            <p>Informações sobre o post</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Nome do post</strong>
            <p>Informações sobre o post</p>
          </a>
        </div>
      </main>
    </>
  );
}
