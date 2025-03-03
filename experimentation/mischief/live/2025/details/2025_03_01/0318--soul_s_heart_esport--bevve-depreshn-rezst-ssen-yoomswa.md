### Roster Details<br />
Team Name: Soul's Heart Esport<br />
Roster: bevve, DEPRESHN, Rezst, sSen, yoomswa<br />
Global Rank: [318](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [179]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  499.8<br />
<br />
Final Rank Value (499.8) = Starting Rank Value (502.8) + Head To Head Adjustments (-3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.8
- 400 + ( ( 0.053 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 502.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1189 | 2024-12-24 | Dragon Esports Club  | L   | 0.751      | -            | -                | -                | -         |    -6.59 | bevve, DEPRESHN, Rezst, sSen, yoomswa   |
|            6 |     1197 | 2024-12-23 | Venom (Swedish team) | W   | 0.747      | 0.333        | 0.000 (0.000)    | 0.039 (0.010)    | 0 (0.000) |    11.29 | bevve, DEPRESHN, dobbo, Rezst, sSen     |
|            5 |     1211 | 2024-12-22 | Dragon Esports Club  | L   | 0.740      | -            | -                | -                | -         |    -6.10 | bevve, DEPRESHN, Rezst, sSen, yoomswa   |
|            4 |     1292 | 2024-12-20 | HOTU                 | L   | 0.727      | -            | -                | -                | -         |    -5.65 | bevve, Diviiii, Rezst, sSen, yoomswa    |
|            3 |     1356 | 2024-12-18 | VOLT (European team) | L   | 0.712      | -            | -                | -                | -         |    -6.20 | AyeZ, Cher1on, DEPRESHN, Rezst, yoomswa |
|            2 |     1372 | 2024-12-17 | C.S.D.E              | W   | 0.705      | 0.303        | 0.006 (0.001)    | 0.184 (0.039)    | 0 (0.000) |    15.82 | AyeZ, Cher1on, DEPRESHN, Rezst, yoomswa |
|            1 |     1472 | 2024-12-14 | VOLT (European team) | L   | 0.685      | -            | -                | -                | -         |    -5.58 | AyeZ, Cher1on, DEPRESHN, Rezst, yoomswa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
