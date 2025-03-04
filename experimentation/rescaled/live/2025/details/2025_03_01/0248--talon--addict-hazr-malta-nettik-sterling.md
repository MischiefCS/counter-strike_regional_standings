### Roster Details<br />
Team Name: TALON<br />
Roster: ADDICT, HaZR, malta, nettik, sterling<br />
Global Rank: [248](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [35]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  540.8<br />
<br />
Final Rank Value (540.8) = Starting Rank Value (508.3) + Head To Head Adjustments (32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.3
- 400 + ( ( 0.057 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 508.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       49 | 2025-02-24 | Vantage Esports      | W   | 1.000      | 0.220        | 0.000 (0.000)    | 0.180 (0.040)    | 0 (0.000) |    16.63 | ADDICT, HaZR, malta, nettik, sterling |
|            9 |       74 | 2025-02-23 | MANTRA               | W   | 1.000      | 0.220        | 0.000 (0.000)    | 0.129 (0.028)    | 0 (0.000) |    17.57 | ADDICT, HaZR, malta, nettik, sterling |
|            8 |     2369 | 2024-09-30 | Natus Vincere Junior | L   | 0.185      | -            | -                | -                | -         |    -0.33 | ADDICT, AZR, HaZR, mhL, nettik        |
|            7 |     2455 | 2024-09-27 | Rhyno Esports        | L   | 0.165      | -            | -                | -                | -         |    -1.52 | ADDICT, AZR, HaZR, mhL, nettik        |
|            6 |     2545 | 2024-09-25 | Los kogutos          | L   | 0.152      | -            | -                | -                | -         |    -0.45 | ADDICT, AZR, HaZR, mhL, nettik        |
|            5 |     2660 | 2024-09-23 | CYBERSHOKE Esports   | L   | 0.137      | -            | -                | -                | -         |    -0.38 | ADDICT, AZR, HaZR, mhL, nettik        |
|            4 |     2886 | 2024-09-14 | Team Kosovo          | L   | 0.078      | -            | -                | -                | -         |    -1.18 | ADDICT, AZR, HaZR, mhL, nettik        |
|            3 |     2927 | 2024-09-13 | GTZ.ESPORTS          | W   | 0.070      | 0.479        | 0.080 (0.003)    | 0.431 (0.015)    | 0 (0.000) |     2.14 | ADDICT, AZR, HaZR, mhL, nettik        |
|            2 |     3011 | 2024-09-10 | QUAZAR               | L   | 0.052      | -            | -                | -                | -         |    -0.60 | ADDICT, AZR, HaZR, mhL, nettik        |
|            1 |     3039 | 2024-09-09 | WW Team              | W   | 0.044      | 0.479        | 0.000 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     0.66 | ADDICT, AZR, HaZR, mhL, nettik        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
