### Roster Details<br />
Team Name: Kubix Esports<br />
Roster: ammar, Caleyy, rosoneriii, tripey, v1w<br />
Global Rank: [80](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  852.4<br />
<br />
Final Rank Value (852.4) = Starting Rank Value (884.5) + Head To Head Adjustments (-32.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.316[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 884.5
- 400 + ( ( 0.248 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 884.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1134 | 2024-12-28 | KONO.ECF           | L   | 0.779      | -            | -                | -                | -         |   -10.83 | ammar, Caleyy, rosoneriii, tripey, v1w    |
|           10 |     1210 | 2024-12-22 | M1X                | W   | 0.740      | 0.143        | 0.006 (0.001)    | 0.082 (0.009)    | 1 (0.740) |     7.84 | ammar, Caleyy, rosoneriii, tripey, v1w    |
|            9 |     1230 | 2024-12-22 | The Suspect        | W   | 0.738      | 0.143        | 0.002 (0.000)    | 0.099 (0.010)    | 1 (0.738) |     5.68 | ammar, Caleyy, rosoneriii, tripey, v1w    |
|            8 |     1242 | 2024-12-21 | Onlineheroes       | W   | 0.734      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.734) |     3.23 | ammar, Caleyy, rosoneriii, tripey, v1w    |
|            7 |     1685 | 2024-12-08 | P0RTUGAL           | L   | 0.647      | -            | -                | -                | -         |   -13.37 | ammar, Caleyy, rosoneriii, tripey, v1w    |
|            6 |     2044 | 2024-12-01 | Insilio            | L   | 0.600      | -            | -                | -                | -         |   -15.14 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            5 |     2047 | 2024-12-01 | ADEPTS             | W   | 0.600      | 0.143        | 0.000 (0.000)    | 0.043 (0.004)    | 0 (0.000) |     2.17 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            4 |     2144 | 2024-11-30 | Permitta Esports   | L   | 0.593      | -            | -                | -                | -         |   -12.85 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            3 |     2227 | 2024-11-28 | Fire Flux Esports  | L   | 0.579      | -            | -                | -                | -         |   -10.49 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            2 |     2287 | 2024-11-26 | GenOne             | W   | 0.566      | 0.372        | 0.010 (0.002)    | 0.426 (0.090)    | 0 (0.000) |     5.67 | ammar, gejmzilla, rosoneriii, tripey, v1w |
|            1 |     2638 | 2024-11-16 | Dark Cloud Esports | W   | 0.499      | 0.143        | 0.038 (0.003)    | 0.570 (0.041)    | 1 (0.499) |     5.95 | ammar, gejmzilla, rosoneriii, tripey, v1w |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,764.26)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.740 | $5,736.64      | $4,246.97       |
| 2024-11-16 |      0.499 | $21,089.26     | $10,517.29      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
