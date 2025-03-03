### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [176](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  692.5<br />
<br />
Final Rank Value (692.5) = Starting Rank Value (653.4) + Head To Head Adjustments (39.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.4
- 400 + ( ( 0.130 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 653.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      154 | 2025-02-21 | ENCE Academy    | L   | 1.000      | -            | -                | -                | -         |   -11.29 | Alxc, ottob, p3kko, puuha, uli |
|           10 |      236 | 2025-02-17 | Heimo Esports   | L   | 1.000      | -            | -                | -                | -         |   -15.01 | Alxc, ottob, p3kko, puuha, uli |
|            9 |      425 | 2025-02-13 | FCottoNd        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.214 (0.031)    | 0 (0.000) |     5.81 | Alxc, ottob, p3kko, puuha, uli |
|            8 |      680 | 2025-02-06 | Smuuttikusilkki | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.265 (0.038)    | 0 (0.000) |     5.35 | Alxc, ottob, p3kko, puuha, uli |
|            7 |      831 | 2025-02-04 | JANO Esports    | L   | 1.000      | -            | -                | -                | -         |   -12.00 | Alxc, ottob, p3kko, puuha, uli |
|            6 |      878 | 2025-02-02 | JANO Esports    | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.404 (0.058)    | 0 (0.000) |    19.83 | Alxc, ottob, p3kko, puuha, uli |
|            5 |      900 | 2025-02-01 | ENCE Academy    | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.545 (0.078)    | 0 (0.000) |    19.73 | Alxc, ottob, p3kko, puuha, uli |
|            4 |      952 | 2025-01-27 | Ex-UHKA eSports | W   | 0.979      | 0.143        | 0.000 (0.000)    | 0.315 (0.044)    | 0 (0.000) |     9.61 | Alxc, ottob, p3kko, puuha, uli |
|            3 |      965 | 2025-01-25 | SAUCEMEN        | W   | 0.965      | 0.143        | 0.000 (0.000)    | 0.103 (0.014)    | 0 (0.000) |     5.91 | Alxc, ottob, p3kko, puuha, uli |
|            2 |      999 | 2025-01-17 | Team yaNgile    | W   | 0.914      | 0.143        | 0.000 (0.000)    | 0.051 (0.007)    | 0 (0.000) |     5.68 | Alxc, ottob, p3kko, puuha, uli |
|            1 |     1003 | 2025-01-17 | Torakka         | W   | 0.913      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.48 | Alxc, ottob, p3kko, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($523.23)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      1.000 | $523.23        | $523.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
