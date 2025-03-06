### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [117](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  501.6<br />
<br />
Final Rank Value (501.6) = Starting Rank Value (501.9) + Head To Head Adjustments (-0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.9
- 400 + ( ( 0.044 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 501.9


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
|            8 |      917 | 2024-12-12 | ENCE               | L   | 0.050      | -            | -                | -                | -         |    -0.28 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |      923 | 2024-12-11 | Fire Flux Esports  | L   | 0.045      | -            | -                | -                | -         |    -0.33 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |      928 | 2024-12-11 | Iberian Soul       | W   | 0.045      | 0.435        | 0.000 (0.000)    | 0.567 (0.011)    | 0 (0.000) |     0.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |      938 | 2024-12-10 | JiJieHao           | L   | 0.039      | -            | -                | -                | -         |    -0.62 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |      947 | 2024-12-09 | CYBERSHOKE Esports | W   | 0.031      | 0.435        | 0.013 (0.000)    | 1.000 (0.014)    | 0 (0.000) |     0.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |      965 | 2024-12-08 | Insilio            | L   | 0.023      | -            | -                | -                | -         |    -0.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     1014 | 2024-12-06 | Wild Lotus         | L   | 0.011      | -            | -                | -                | -         |    -0.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     1021 | 2024-12-06 | Illuminar Gaming   | L   | 0.009      | -            | -                | -                | -         |    -0.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
