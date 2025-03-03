### Roster Details<br />
Team Name: Team Denmark (Female team)<br />
Roster: anja, Ismo, KiTKaT, marie, Sukkerzhok<br />
Global Rank: [184](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [127]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  684.3<br />
<br />
Final Rank Value (684.3) = Starting Rank Value (696.8) + Head To Head Adjustments (-12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 696.8
- 400 + ( ( 0.152 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 696.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2771 | 2024-11-13 | Prototype Blaze           | L   | 0.477      | -            | -                | -                | -         |    -4.16 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            9 |     2789 | 2024-11-12 | Team Canada (Female team) | W   | 0.473      | 0.557        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.473) |     2.89 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            8 |     2834 | 2024-11-11 | Team Poland (Female team) | L   | 0.466      | -            | -                | -                | -         |    -3.13 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            7 |     2843 | 2024-11-11 | Team Iran (Female team)   | W   | 0.465      | 0.557        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.465) |     2.44 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            6 |     3415 | 2024-10-27 | AKA HERO KAJO             | L   | 0.365      | -            | -                | -                | -         |    -5.68 | anja, Ismo, KiTKaT, marie, Sukkerzhok |
|            5 |     3497 | 2024-10-18 | Eco Warriors              | L   | 0.306      | -            | -                | -                | -         |    -3.54 | Ismo, KiTKaT, marie, Nea, pullox      |
|            4 |     3855 | 2024-10-03 | NIP Impact                | L   | 0.206      | -            | -                | -                | -         |    -3.15 | Ismo, KiTKaT, marie, Nea, pullox      |
|            3 |     4370 | 2024-09-19 | Let Her Cook              | W   | 0.113      | 0.328        | 0.002 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     1.45 | Ismo, KiTKaT, marie, Nea, pullox      |
|            2 |     4577 | 2024-09-12 | ENCE Athena               | W   | 0.066      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.57 | Ismo, KiTKaT, marie, Nea, pullox      |
|            1 |     4806 | 2024-09-04 | Team Spirit Female        | L   | 0.013      | -            | -                | -                | -         |    -0.23 | Ismo, KiTKaT, marie, Nea, pullox      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,331.27)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.486 | $5,000.00      | $2,432.29       |
| 2024-10-27 |      0.365 | $1,412.28      | $515.48         |
| 2024-10-20 |      0.320 | $1,200.00      | $383.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
