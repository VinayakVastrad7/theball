type Player = {
  label: string;
  x: string;
  y: string;
};

function PlayerMarker({ player }: { player: Player }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: player.x, top: player.y }}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 text-[9px] font-bold text-zinc-900 shadow-md sm:h-8 sm:w-8 sm:text-[10px]">
        ●
      </div>

      <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[9px] text-zinc-300 sm:text-[10px]">
        {player.label}
      </span>
    </div>
  );
}

const formations: Record<string, Player[]> = {
  "3-5-2": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LCB", x: "32%", y: "73%" },
    { label: "CB", x: "50%", y: "75%" },
    { label: "RCB", x: "68%", y: "73%" },

    { label: "LWB", x: "12%", y: "53%" },
    { label: "LCM", x: "35%", y: "51%" },
    { label: "CM", x: "50%", y: "46%" },
    { label: "RCM", x: "65%", y: "51%" },
    { label: "RWB", x: "88%", y: "53%" },

    { label: "ST", x: "43%", y: "23%" },
    { label: "ST", x: "57%", y: "23%" },
  ],

  "3-4-2-1": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LCB", x: "32%", y: "73%" },
    { label: "CB", x: "50%", y: "75%" },
    { label: "RCB", x: "68%", y: "73%" },

    { label: "LWB", x: "13%", y: "53%" },
    { label: "DM", x: "42%", y: "55%" },
    { label: "DM", x: "58%", y: "55%" },
    { label: "RWB", x: "87%", y: "53%" },

    { label: "LAM", x: "42%", y: "35%" },
    { label: "RAM", x: "58%", y: "35%" },

    { label: "ST", x: "50%", y: "20%" },
  ],

  "3-4-3": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LCB", x: "32%", y: "73%" },
    { label: "CB", x: "50%", y: "75%" },
    { label: "RCB", x: "68%", y: "73%" },

    { label: "LWB", x: "13%", y: "53%" },
    { label: "DM", x: "42%", y: "55%" },
    { label: "DM", x: "58%", y: "55%" },
    { label: "RWB", x: "87%", y: "53%" },

    { label: "LW", x: "25%", y: "23%" },
    { label: "ST", x: "50%", y: "19%" },
    { label: "RW", x: "75%", y: "23%" },
  ],

  "3-4-1-2": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LCB", x: "32%", y: "73%" },
    { label: "CB", x: "50%", y: "75%" },
    { label: "RCB", x: "68%", y: "73%" },

    { label: "LWB", x: "13%", y: "53%" },
    { label: "DM", x: "42%", y: "55%" },
    { label: "DM", x: "58%", y: "55%" },
    { label: "RWB", x: "87%", y: "53%" },

    { label: "AM", x: "50%", y: "35%" },

    { label: "ST", x: "43%", y: "20%" },
    { label: "ST", x: "57%", y: "20%" },
  ],

  "3-1-4-2": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LCB", x: "32%", y: "73%" },
    { label: "CB", x: "50%", y: "75%" },
    { label: "RCB", x: "68%", y: "73%" },

    { label: "DM", x: "50%", y: "58%" },

    { label: "LW", x: "15%", y: "43%" },
    { label: "AM", x: "38%", y: "42%" },
    { label: "AM", x: "62%", y: "42%" },
    { label: "RW", x: "85%", y: "43%" },

    { label: "ST", x: "50%", y: "20%" },
  ],

  "3-3-1-3": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LCB", x: "32%", y: "73%" },
    { label: "CB", x: "50%", y: "75%" },
    { label: "RCB", x: "68%", y: "73%" },

    { label: "LWB", x: "15%", y: "55%" },
    { label: "DM", x: "50%", y: "57%" },
    { label: "RWB", x: "85%", y: "55%" },

    { label: "AM", x: "50%", y: "38%" },

    { label: "LW", x: "25%", y: "22%" },
    { label: "ST", x: "50%", y: "19%" },
    { label: "RW", x: "75%", y: "22%" },
  ],

  "4-3-3": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LB", x: "12%", y: "70%" },
    { label: "LCB", x: "37%", y: "74%" },
    { label: "RCB", x: "63%", y: "74%" },
    { label: "RB", x: "88%", y: "70%" },

    { label: "CM", x: "35%", y: "52%" },
    { label: "CM", x: "65%", y: "52%" },
    { label: "DM", x: "50%", y: "56%" },

    { label: "LW", x: "25%", y: "24%" },
    { label: "ST", x: "50%", y: "19%" },
    { label: "RW", x: "75%", y: "24%" },
  ],

  "4-2-3-1": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LB", x: "12%", y: "70%" },
    { label: "LCB", x: "37%", y: "74%" },
    { label: "RCB", x: "63%", y: "74%" },
    { label: "RB", x: "88%", y: "70%" },

    { label: "DM", x: "42%", y: "56%" },
    { label: "DM", x: "58%", y: "56%" },

    { label: "LW", x: "22%", y: "38%" },
    { label: "AM", x: "50%", y: "36%" },
    { label: "RW", x: "78%", y: "38%" },

    { label: "ST", x: "50%", y: "19%" },
  ],

  "4-3-1-2": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LB", x: "12%", y: "70%" },
    { label: "LCB", x: "37%", y: "74%" },
    { label: "RCB", x: "63%", y: "74%" },
    { label: "RB", x: "88%", y: "70%" },

    { label: "LCM", x: "35%", y: "53%" },
    { label: "CM", x: "50%", y: "56%" },
    { label: "RCM", x: "65%", y: "53%" },

    { label: "AM", x: "50%", y: "36%" },

    { label: "ST", x: "43%", y: "20%" },
    { label: "ST", x: "57%", y: "20%" },
  ],

  "4-4-2": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LB", x: "12%", y: "70%" },
    { label: "LCB", x: "37%", y: "74%" },
    { label: "RCB", x: "63%", y: "74%" },
    { label: "RB", x: "88%", y: "70%" },

    { label: "LM", x: "15%", y: "52%" },
    { label: "DM", x: "42%", y: "54%" },
    { label: "DM", x: "58%", y: "54%" },
    { label: "RM", x: "85%", y: "52%" },

    { label: "ST", x: "43%", y: "20%" },
    { label: "ST", x: "57%", y: "20%" },
  ],

  "4-4-1-1": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LB", x: "12%", y: "70%" },
    { label: "LCB", x: "37%", y: "74%" },
    { label: "RCB", x: "63%", y: "74%" },
    { label: "RB", x: "88%", y: "70%" },

    { label: "LM", x: "15%", y: "52%" },
    { label: "DM", x: "42%", y: "54%" },
    { label: "DM", x: "58%", y: "54%" },
    { label: "RM", x: "85%", y: "52%" },

    { label: "AM", x: "50%", y: "35%" },

    { label: "ST", x: "50%", y: "19%" },
  ],

  "4-1-4-1": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LB", x: "12%", y: "70%" },
    { label: "LCB", x: "37%", y: "74%" },
    { label: "RCB", x: "63%", y: "74%" },
    { label: "RB", x: "88%", y: "70%" },

    { label: "DM", x: "50%", y: "58%" },

    { label: "LM", x: "15%", y: "44%" },
    { label: "AM", x: "38%", y: "43%" },
    { label: "AM", x: "62%", y: "43%" },
    { label: "RM", x: "85%", y: "44%" },

    { label: "ST", x: "50%", y: "19%" },
  ],

  "5-3-2": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LWB", x: "10%", y: "62%" },
    { label: "LCB", x: "30%", y: "74%" },
    { label: "CB", x: "50%", y: "76%" },
    { label: "RCB", x: "70%", y: "74%" },
    { label: "RWB", x: "90%", y: "62%" },

    { label: "LCM", x: "35%", y: "51%" },
    { label: "DM", x: "50%", y: "55%" },
    { label: "RCM", x: "65%", y: "51%" },

    { label: "ST", x: "43%", y: "20%" },
    { label: "ST", x: "57%", y: "20%" },
  ],

  "5-4-1": [
    { label: "GK", x: "50%", y: "91%" },

    { label: "LWB", x: "10%", y: "62%" },
    { label: "LCB", x: "30%", y: "74%" },
    { label: "CB", x: "50%", y: "76%" },
    { label: "RCB", x: "70%", y: "74%" },
    { label: "RWB", x: "90%", y: "62%" },

    { label: "LM", x: "16%", y: "49%" },
    { label: "DM", x: "40%", y: "53%" },
    { label: "DM", x: "60%", y: "53%" },
    { label: "RM", x: "84%", y: "49%" },

    { label: "ST", x: "50%", y: "20%" },
  ],
};

type TacticalDiagramProps = {
  formation: keyof typeof formations;
};

export default function TacticalDiagram({
  formation,
}: TacticalDiagramProps) {
  const players = formations[formation];

  return (
    <figure className="my-12">
      <div className="mx-auto w-full max-w-md overflow-hidden border border-zinc-800 bg-zinc-950">
        <div className="relative aspect-[3/5] p-5 sm:p-7">
          <div className="relative h-full w-full border border-zinc-700">

            {/* Halfway line */}
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-zinc-700" />

            {/* Centre circle */}
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700 sm:h-24 sm:w-24" />

            {/* Centre spot */}
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-500" />

            {/* Top penalty box */}
            <div className="absolute left-1/2 top-0 h-[16%] w-[52%] -translate-x-1/2 border border-t-0 border-zinc-700" />

            {/* Bottom penalty box */}
            <div className="absolute bottom-0 left-1/2 h-[16%] w-[52%] -translate-x-1/2 border border-b-0 border-zinc-700" />

            {/* Top goal area */}
            <div className="absolute left-1/2 top-0 h-[7%] w-[24%] -translate-x-1/2 border border-t-0 border-zinc-700" />

            {/* Bottom goal area */}
            <div className="absolute bottom-0 left-1/2 h-[7%] w-[24%] -translate-x-1/2 border border-b-0 border-zinc-700" />

            {/* Players */}
            {players.map((player, index) => (
              <PlayerMarker
                key={`${player.label}-${index}`}
                player={player}
              />
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mx-auto mt-3 max-w-md text-xs text-zinc-500">
        {formation}
      </figcaption>
    </figure>
  );
}