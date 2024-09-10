type Props = {
  width?: string;
  height?: string;
};
export default function FolderIcon({
  height = "100px",
  width = "100px",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      className="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M855.68042 343.328203H739.741789v-10.934071c0-38.926072-31.658534-70.584607-70.64604-70.584607H483.413122c-18.081815 0-56.226663-58.508903-118.580255-58.508903H166.592286c-38.984434 0-70.704401 31.716896-70.704401 70.642968v472.888605c0 38.147919 30.516902 69.203385 68.483593 70.405426 0.418769 0 0.781225 0.239589 1.199994 0.23959H794.166413c38.929144 0 64.097269-32.49812 70.64604-70.64604l61.514006-332.857952c7.629993-39.288528-31.716896-70.645016-70.646039-70.645016z"
        fill="#27323A"
      />
      <path
        d="M142.023133 273.94359c0-13.514262 10.992433-24.506695 24.569153-24.506695h198.240581c24.08895 0 44.692594 16.81834 62.895227 31.658534 16.941207 13.816309 32.918937 26.850369 55.685028 26.850369h185.682627c13.517334 0 24.509767 10.992433 24.509767 24.448334v10.934071H591.665445c-36.886493 0-68.545027 50.161166-82.24154 50.161166H313.58843c-38.926072 0-63.374406 31.716896-70.704401 70.642968l-59.409922 285.704961c-1.98429 10.091414-6.188363 20.244261-17.66407 21.326508-13.154879-0.421841-23.787928-11.115299-23.787927-24.331611V273.94359z"
        fill="#79CCBF"
      />
      <path
        d="M880.971411 405.562001L819.33761 739.023021c-0.541635 3.306126-6.068568 32.31894-25.171197 32.318941H224.44283c1.261427-4.324892 3.183259-7.147743 4.145712-12.134065l59.650535-286.544547c1.442654-7.750812 7.631017-33.038732 25.350377-33.038732h195.835474c23.249364 0 38.867711-14.477738 53.944423-28.475275 7.209177-6.668565 22.166093-20.48385 28.776297-21.686915h263.534772c8.590398 0 18.383861 4.324892 23.307725 10.272642 1.743677 2.101013 2.165517 3.422849 2.165518 4.506119-0.001024 0.481226-0.120818 0.902043-0.182252 1.320812z"
        fill="#F4CE73"
      />
      <path
        d="M766.654615 625.006223H577.126274c-11.053866 0-20.004671-8.949782-20.004672-20.004671s8.949782-20.004671 20.004672-20.004672h189.527317c10.992433 0 19.943238 8.949782 19.943238 20.004672s-8.949782 20.004671-19.942214 20.004671zM784.434383 536.641848H594.907066c-11.053866 0-20.004671-8.953877-20.004671-20.004671 0-11.053866 8.950806-20.004671 20.004671-20.004672h189.527317c10.995505 0 19.94631 8.949782 19.94631 20.004672 0 11.050794-8.950806 20.004671-19.94631 20.004671z"
        fill="#27323A"
      />
      <path
        d="M483.413122 307.945798c-22.76609 0-38.744845-13.035084-55.685028-26.850369-18.201609-14.840194-38.806278-31.658534-62.895227-31.658534H166.592286c-13.575696 0-24.569152 10.992433-24.569153 24.506695v34.002208h341.389989z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
