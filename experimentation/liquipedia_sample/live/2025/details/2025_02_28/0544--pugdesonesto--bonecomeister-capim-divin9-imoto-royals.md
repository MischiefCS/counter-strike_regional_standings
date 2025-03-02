### Roster Details<br />
Team Name: Pugdesonesto<br />
Roster: Bonecomeister, CaPiM, divin9, imoto, Royals<br />
Global Rank: [544](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [124]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  481.5<br />
<br />
Final Rank Value (481.5) = Starting Rank Value (489.9) + Head To Head Adjustments (-8.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.9
- 400 + ( ( 0.044 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 489.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1981 | 2024-12-06 | RED Canids Academy      | L   | 0.640      | -            | -                | -                | -         |    -3.78 | Bonecomeister, CaPiM, divin9, imoto, Royals |
|            4 |     2089 | 2024-12-03 | AMIGOS (Brazilian team) | L   | 0.620      | -            | -                | -                | -         |    -8.69 | Bonecomeister, CaPiM, divin9, imoto, Royals |
|            3 |     2750 | 2024-11-22 | Nitro.GG                | L   | 0.547      | -            | -                | -                | -         |    -4.25 | Bonecomeister, divin9, imoto, phx, Royals   |
|            2 |     2888 | 2024-11-20 | Yawara E-Sports         | L   | 0.533      | -            | -                | -                | -         |    -3.39 | Bonecomeister, divin9, imoto, phx, Royals   |
|            1 |     3178 | 2024-11-15 | Nitro.GG                | W   | 0.500      | 0.143        | 0.002 (0.000)    | 0.507 (0.036)    | 0 (0.000) |    11.74 | Bonecomeister, divin9, imoto, phx, Royals   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
