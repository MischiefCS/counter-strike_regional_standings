### Roster Details<br />
Team Name: Ex-GODSENT<br />
Roster: Brillo, mogv, Silence, Svedjehed, titulus<br />
Global Rank: [296](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [171]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  554.7<br />
<br />
Final Rank Value (554.7) = Starting Rank Value (513.5) + Head To Head Adjustments (41.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.5
- 400 + ( ( 0.058 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 513.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      813 | 2025-02-04 | 9INE                       | L   | 1.000      | -            | -                | -                | -         |    -3.58 | Brillo, mogv, Silence, Svedjehed, titulus |
|            8 |      828 | 2025-02-04 | EYEBALLERS                 | W   | 1.000      | 0.143        | 0.019 (0.003)    | 0.348 (0.050)    | 0 (0.000) |    25.39 | Brillo, mogv, Silence, Svedjehed, titulus |
|            7 |     1266 | 2024-12-21 | Betclic Apogee Esports     | L   | 0.732      | -            | -                | -                | -         |    -3.69 | Brillo, mogv, Silence, TIM, tvs           |
|            6 |     1300 | 2024-12-20 | Mission Possible           | L   | 0.727      | -            | -                | -                | -         |   -11.72 | Brillo, mogv, robiin, Silence, tvs        |
|            5 |     1313 | 2024-12-20 | 500                        | L   | 0.726      | -            | -                | -                | -         |    -1.64 | Brillo, mogv, Silence, TIM, tvs           |
|            4 |     1520 | 2024-12-13 | NEVERMORE (Ukrainian team) | L   | 0.681      | -            | -                | -                | -         |    -4.14 | Brillo, mogv, Silence, TIM, tvs           |
|            3 |     1528 | 2024-12-13 | BadGuys                    | W   | 0.680      | 0.143        | 0.000 (0.000)    | 0.335 (0.033)    | 0 (0.000) |    12.01 | Brillo, mogv, Silence, TIM, tvs           |
|            2 |     1534 | 2024-12-13 | The Suspect                | W   | 0.680      | 0.143        | 0.002 (0.000)    | 0.099 (0.010)    | 0 (0.000) |    14.20 | Brillo, mogv, Silence, TIM, tvs           |
|            1 |     1538 | 2024-12-13 | Wu-Tang Clan               | W   | 0.680      | 0.143        | 0.001 (0.000)    | 0.224 (0.022)    | 0 (0.000) |    14.32 | Brillo, mogv, Silence, TIM, tvs           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
