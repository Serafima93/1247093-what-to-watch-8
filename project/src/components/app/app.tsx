import MainPage from '../main/main';

type AppScreenProps = {
  filmsCount: number[];
  filmName: string;
  filmType: string;
  filmDate: number;
};

function App(props: AppScreenProps): JSX.Element {
  const { filmsCount, filmName, filmType, filmDate } = props;

  return (
    <MainPage
      filmsCount={filmsCount}
      filmName={filmName}
      filmType={filmType}
      filmDate={filmDate}
    />
  );
}

export default App;
