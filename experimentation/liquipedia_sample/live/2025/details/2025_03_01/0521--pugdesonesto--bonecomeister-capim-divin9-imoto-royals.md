### Roster Details<br />
Team Name: Pugdesonesto<br />
Roster: Bonecomeister, CaPiM, divin9, imoto, Royals<br />
Global Rank: [521](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [121]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  480.1<br />
<br />
Final Rank Value (480.1) = Starting Rank Value (490.0) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 490.0
- 400 + ( ( 0.046 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 490.0


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
|            5 |     1720 | 2024-12-06 | RED Canids Academy      | L   | 0.634      | -            | -                | -                | -         |    -4.03 | Bonecomeister, CaPiM, divin9, imoto, Royals |
|            4 |     1846 | 2024-12-03 | AMIGOS (Brazilian team) | L   | 0.614      | -            | -                | -                | -         |    -8.95 | Bonecomeister, CaPiM, divin9, imoto, Royals |
|            3 |     2514 | 2024-11-22 | Nitro.GG                | L   | 0.540      | -            | -                | -                | -         |    -4.52 | Bonecomeister, divin9, imoto, phx, Royals   |
|            2 |     2657 | 2024-11-20 | Yawara E-Sports         | L   | 0.527      | -            | -                | -                | -         |    -3.68 | Bonecomeister, divin9, imoto, phx, Royals   |
|            1 |     2923 | 2024-11-15 | Nitro.GG                | W   | 0.494      | 0.265        | 0.002 (0.000)    | 0.518 (0.068)    | 0 (0.000) |    11.28 | Bonecomeister, divin9, imoto, phx, Royals   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
