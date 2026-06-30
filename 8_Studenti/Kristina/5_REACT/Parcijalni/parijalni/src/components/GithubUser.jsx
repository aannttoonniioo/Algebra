export default function GithubUser({ user }) {
  const { avatar_url, bio, name, location } = user;

  return (
    <>
      <div style={styles.container}>
        <div style={styles.titleContainer}>
          <img src={avatar_url} style={styles.image} alt="No-logo" />
          <span style={styles.name}>{name}</span>
        </div>

        <p>
          <strong>BIO:{bio}</strong>
        </p>
        <strong>LOCATION: {location}</strong>
      </div>
    </>
  );
}
const styles = {
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontsize: 64,
    marginLeft: 36,
    display: "inline",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBotom: 24,
  },
  container: {
    textAlign: "justify",
  },
};
