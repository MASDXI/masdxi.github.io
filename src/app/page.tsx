import Head from "next/head";
import Link from "next/link";
import info from "../assets/information.json";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="preamble">
        <Link href={info.github}>
          <h1 className="title">sirawt</h1>
        </Link>
        <h2 className="subtitle" style={{ marginBottom: "35px" }}>
          contact me via
          <Link href={`mailto:${info.email}`}>&nbsp;email&nbsp;</Link>
          or view my
          <Link href={info.github} target="_blank">
            &nbsp;github&nbsp;
          </Link>
          &amp;
          <Link href={info.twitter} target="_blank">
            &nbsp;twitter&nbsp;
          </Link>
        </h2>
      </div>

      <div>
        <p style={{ marginBottom: "40px", textAlign: "center" }}>
          contract software engineer at telecommunication firm and Phd student
          at{" "}
          <Link href="https://www.utcc.ac.th" target="_blank">
            University of the Thai Chamber of Commerce
          </Link>
        </p>

        <div>
          <h2>Projects</h2>
          <div>
            <ul>
              {info.projects.map((project, index) => (
                <li key={index}>
                  <Link href={project.url} target="_blank">
                    <code>{project.title}</code>
                  </Link>
                  : {project.description}
                </li>
              ))}
            </ul>
          </div>

          <h2>Articles and Publications</h2>
          <div>
            <ul>
              {info.publications.map((pub, index) => (
                <li key={index}>
                  <Link href={pub.url} target="_blank">
                    <code>{pub.title}</code>
                  </Link>
                  : {pub.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <footer>
          <p style={{ textAlign: "center" }}>
            This website was modified from
            <Link href="https://github.com/transmissions11/transmissions11.github.io">
              {" "}
              t11s&#39;{" "}
            </Link>{" "}
            fork of the a
            <Link href="https://github.com/dapphub/dapp-tools">
              {" "}
              dapptools
            </Link>{" "}
            website re-build with{" "}
            <Link href="https://nextjs.org" target="_blank">
              next.js
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
