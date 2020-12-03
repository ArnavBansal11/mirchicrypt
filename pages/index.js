import LoadingFullScreen, { Button } from "../components/helping";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../styles/home.scss";
import { useRouter } from "next/router";

export default function Home() {
  const [session, loading] = useSession();

  return loading ? (
    <LoadingFullScreen />
  ) : session ? (
    <HomePage loggedIn={true} />
  ) : (
    <HomePage loggedIn={false} />
  );
}

const HomePage = ({ loggedIn }) => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <h1 className={styles.main__nav}>MirchiCrypt 1.0</h1>
      <div className={styles.main__body}>
        <img src="/espice.png" />
        <p>
          Welcome to the first ever version of “MirchiCrypt”, the Online Intra
          Cryptic Hunt of eSpice. This hunt is made to enhance the cryptic
          skills of each and every member whether you are new to hunts or a
          champion. Cryptic Hunts usually hold MAXIMUM points in tech symposiums
          and clubs tend to lose the overall trophy usually because of cryptic
          hunts. We do not want this to happen in the session 2020-21 and hence,
          this hunt.
        </p>
        <h4>#MirchiTohLagegi</h4>
        {loggedIn ? (
          <Button
            text="Discord Server"
            style={{ width: "250px" }}
            onPressed={() => router.replace("https://discord.gg/Ga8gr28ZpK")}
          />
        ) : (
          <Button
            text="Sign in with Discord"
            style={{ width: "300px" }}
            onPressed={() => signIn("discord", {callbackUrl: "https://mirchicrypt.arnavb.com"})}
          />
        )}
      </div>
    </div>
  );
};
