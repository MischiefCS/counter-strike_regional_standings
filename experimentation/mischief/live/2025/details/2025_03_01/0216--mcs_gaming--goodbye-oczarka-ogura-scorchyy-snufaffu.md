### Roster Details<br />
Team Name: MCS Gaming<br />
Roster: Goodbye, Oczarka, ogura, Scorchyy, snufaffu<br />
Global Rank: [216](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [47]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  654.6<br />
<br />
Final Rank Value (654.6) = Starting Rank Value (640.9) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.9
- 400 + ( ( 0.123 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 640.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      314 | 2025-02-15 | Regain               | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.116 (0.017)    | 0 (0.000) |     7.33 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|           13 |      315 | 2025-02-15 | MarcaRegistrada      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.140 (0.020)    | 0 (0.000) |    13.62 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|           12 |      366 | 2025-02-14 | MIGHT                | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.492 (0.070)    | 0 (0.000) |    19.29 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|           11 |      487 | 2025-02-10 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |   -17.87 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|           10 |      529 | 2025-02-09 | Bad News Capybaras   | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.137 (0.020)    | 0 (0.000) |    15.80 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            9 |      578 | 2025-02-08 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |   -20.34 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            8 |      666 | 2025-02-06 | MIGHT                | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.492 (0.070)    | 0 (0.000) |    19.22 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            7 |      675 | 2025-02-06 | Straight2Killin      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.111 (0.016)    | 0 (0.000) |    10.30 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            6 |     1507 | 2024-12-13 | Akimbo Esports       | L   | 0.682      | -            | -                | -                | -         |    -9.38 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            5 |     1819 | 2024-12-05 | Bad Boys             | L   | 0.629      | -            | -                | -                | -         |    -8.80 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            4 |     1959 | 2024-12-02 | Chicken Coop Esports | L   | 0.609      | -            | -                | -                | -         |    -8.97 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu  |
|            3 |     2314 | 2024-11-24 | Make Your Mind       | L   | 0.556      | -            | -                | -                | -         |    -7.33 | jBREEEZY, Oczarka, ogura, Scorchyy, snufaffu |
|            2 |     2319 | 2024-11-24 | HRT N ADDERALL       | W   | 0.554      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.41 | jBREEEZY, Oczarka, ogura, Scorchyy, snufaffu |
|            1 |     3468 | 2024-10-19 | Timbermen            | L   | 0.316      | -            | -                | -                | -         |    -4.59 | GibbyATL, Goodbye, ogura, Scorchyy, snufaffu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($894.65)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $1,250.00      | $811.28         |
| 2024-11-24 |      0.556 | $150.00        | $83.37          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
