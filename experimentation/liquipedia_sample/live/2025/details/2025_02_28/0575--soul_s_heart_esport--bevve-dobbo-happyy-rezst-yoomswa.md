### Roster Details<br />
Team Name: Soul's Heart Esport<br />
Roster: bevve, dobbo, Happyy, Rezst, yoomswa<br />
Global Rank: [575](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [356]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  404.6<br />
<br />
Final Rank Value (404.6) = Starting Rank Value (400.9) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.9
- 400 + ( ( 0.000 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 400.9


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
|            5 |      643 | 2025-02-07 | SINNERS Esports      | L   | 1.000      | -            | -                | -                | -         |    -1.10 | bevve, dobbo, Happyy, Rezst, yoomswa  |
|            4 |     1234 | 2024-12-24 | Dragon Esports Club  | L   | 0.758      | -            | -                | -                | -         |    -3.84 | bevve, DEPRESHN, Rezst, sSen, yoomswa |
|            3 |     1242 | 2024-12-23 | Venom (Swedish team) | W   | 0.753      | 0.333        | 0.000 (0.000)    | 0.068 (0.017)    | 0 (0.000) |    14.58 | bevve, DEPRESHN, dobbo, Rezst, sSen   |
|            2 |     1257 | 2024-12-22 | Dragon Esports Club  | L   | 0.747      | -            | -                | -                | -         |    -3.37 | bevve, DEPRESHN, Rezst, sSen, yoomswa |
|            1 |     1361 | 2024-12-20 | HOTU                 | L   | 0.734      | -            | -                | -                | -         |    -2.59 | bevve, Diviiii, Rezst, sSen, yoomswa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
