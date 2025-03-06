### Roster Details<br />
Team Name: Adventurers<br />
Roster: hAdji, k1to, meztal, OWNER, Woro2k<br />
Global Rank: [258](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [142]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  517.6<br />
<br />
Final Rank Value (517.6) = Starting Rank Value (525.9) + Head To Head Adjustments (-8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.9
- 400 + ( ( 0.065 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 525.9


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
|           12 |      561 | 2025-02-05 | RUSH B (Russian team) | L   | 1.000      | -            | -                | -                | -         |    -5.33 | hAdji, k1to, meztal, OWNER, Woro2k        |
|           11 |      577 | 2025-02-04 | KONO.ECF              | L   | 1.000      | -            | -                | -                | -         |   -10.96 | hAdji, k1to, meztal, OWNER, Woro2k        |
|           10 |      650 | 2025-01-27 | Zero Tenacity         | L   | 0.979      | -            | -                | -                | -         |    -6.02 | adamS, hAdji, juanflatroo, meztal, Woro2k |
|            9 |     2155 | 2024-10-06 | FAVBET Team           | L   | 0.225      | -            | -                | -                | -         |    -1.47 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            8 |     2182 | 2024-10-05 | Monte                 | L   | 0.218      | -            | -                | -                | -         |    -1.41 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            7 |     2204 | 2024-10-04 | GamerLegion           | L   | 0.213      | -            | -                | -                | -         |    -0.02 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            6 |     2305 | 2024-10-02 | Los kogutos           | W   | 0.197      | 0.435        | 0.027 (0.002)    | 0.387 (0.033)    | 0 (0.000) |     5.51 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            5 |     2368 | 2024-09-30 | ALTERNATE aTTaX       | W   | 0.186      | 0.435        | 0.020 (0.002)    | 0.351 (0.028)    | 0 (0.000) |     5.09 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            4 |     2377 | 2024-09-30 | TSM                   | L   | 0.185      | -            | -                | -                | -         |    -1.42 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            3 |     2412 | 2024-09-28 | Team Spirit Academy   | L   | 0.172      | -            | -                | -                | -         |    -0.63 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            2 |     2500 | 2024-09-26 | FAVBET Team           | W   | 0.158      | 0.435        | 0.029 (0.002)    | 0.608 (0.042)    | 0 (0.000) |     4.05 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            1 |     2603 | 2024-09-24 | Passion UA            | W   | 0.146      | 0.435        | 0.044 (0.003)    | 0.588 (0.037)    | 0 (0.000) |     4.31 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
