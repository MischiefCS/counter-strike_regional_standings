### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: dwushka, KusMe, shady, spirit, xdENiSZERA<br />
Global Rank: [117](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [81]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  702.5<br />
<br />
Final Rank Value (702.5) = Starting Rank Value (700.1) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.1
- 400 + ( ( 0.145 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 700.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      793 | 2024-12-20 | AMKAL ESPORTS         | L   | 0.477      | -            | -                | -                | -         |    -7.12 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            5 |      804 | 2024-12-19 | K27                   | W   | 0.470      | 0.333        | 0.005 (0.001)    | 0.144 (0.023)    | 0 (0.000) |     7.73 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            4 |      847 | 2024-12-15 | RUSH B (Russian team) | L   | 0.444      | -            | -                | -                | -         |    -4.88 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            3 |     1069 | 2024-12-04 | Monte                 | L   | 0.371      | -            | -                | -                | -         |    -4.34 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            2 |     1093 | 2024-12-03 | Viperio               | W   | 0.364      | 0.333        | 0.002 (0.000)    | 0.034 (0.004)    | 0 (0.000) |     4.40 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            1 |     1118 | 2024-12-02 | BC.Game Esports       | W   | 0.356      | 0.333        | 0.019 (0.002)    | 0.212 (0.025)    | 0 (0.000) |     6.62 | dwushka, KusMe, shady, spirit, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,319.34)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.484 | $1,000.00      | $483.75         |
| 2024-12-15 |      0.444 | $3,873.73      | $1,721.84       |
| 2024-12-04 |      0.371 | $3,000.00      | $1,113.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
