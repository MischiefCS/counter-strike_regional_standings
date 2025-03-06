### Roster Details<br />
Team Name: Only One Word<br />
Roster: BaN4na, Freeman, Oath, Terryyy, viridian<br />
Global Rank: [175](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [20]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  599.3<br />
<br />
Final Rank Value (599.3) = Starting Rank Value (598.3) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.222[<sup>1</sup>](#table2)
- Bounty Collected: 0.154[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 598.3
- 400 + ( ( 0.096 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 598.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       31 | 2025-02-25 | KZG                         | W   | 0.929      | 0.143        | 0.000 (0.000)    | 0.219 (0.029)    | 0 (0.000) |    13.71 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            7 |       34 | 2025-02-25 | Vantage Esports             | W   | 0.927      | 0.143        | 0.000 (0.000)    | 0.212 (0.028)    | 0 (0.000) |    12.08 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            6 |       52 | 2025-02-24 | Justice For Tomorrow        | W   | 0.921      | 0.143        | 0.000 (0.000)    | 0.139 (0.018)    | 0 (0.000) |    11.31 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            5 |       68 | 2025-02-24 | SemperFi Esports            | L   | 0.916      | -            | -                | -                | -         |   -15.07 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            4 |      417 | 2025-02-08 | Shika                       | L   | 0.814      | -            | -                | -                | -         |   -15.89 | BaN4na, neo, Oath, Terryyy, viridian     |
|            3 |      481 | 2025-02-07 | Gods Reign                  | L   | 0.808      | -            | -                | -                | -         |    -3.59 | BaN4na, neo, Oath, Terryyy, viridian     |
|            2 |     1895 | 2024-10-18 | Housebets                   | L   | 0.055      | -            | -                | -                | -         |    -0.86 | BaN4na, neo, Oath, Terryyy, viridian     |
|            1 |     1919 | 2024-10-17 | Mindfreak (Australian team) | L   | 0.049      | -            | -                | -                | -         |    -0.72 | BaN4na, neo, Oath, Terryyy, viridian     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($71.46)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.068 | $1,050.00      | $71.46          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
