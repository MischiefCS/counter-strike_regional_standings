### Roster Details<br />
Team Name: Also<br />
Roster: BunnyAzul, elybalich88, neosoznala, Sof1ra, valencia<br />
Global Rank: [237](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [149]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  636.0<br />
<br />
Final Rank Value (636.0) = Starting Rank Value (626.6) + Head To Head Adjustments (9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.6
- 400 + ( ( 0.116 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 626.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      682 | 2025-02-06 | AKA HERO KAJO      | L   | 1.000      | -            | -                | -                | -         |   -13.27 | BunnyAzul, elybalich88, neosoznala, Sof1ra, valencia    |
|            6 |     1091 | 2024-12-29 | 5womans            | W   | 0.786      | 0.250        | 0.001 (0.000)    | 0.087 (0.017)    | 0 (0.000) |     8.52 | BunnyAzul, kaRRRolina, neosoznala, Sof1ra, valencia     |
|            5 |     1120 | 2024-12-28 | VHS                | W   | 0.780      | 0.250        | 0.000 (0.000)    | 0.043 (0.008)    | 0 (0.000) |     5.28 | BunnyAzul, kaRRRolina, neosoznala, Sof1ra, valencia     |
|            4 |     1123 | 2024-12-28 | Elite Klan Violet  | W   | 0.780      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.85 | BunnyAzul, kaRRRolina, neosoznala, Sof1ra, valencia     |
|            3 |     2550 | 2024-11-17 | Team Spirit Female | L   | 0.507      | -            | -                | -                | -         |    -7.05 | elybalich88, neosoznala, slabosilnaya, Sof1ra, valencia |
|            2 |     2555 | 2024-11-17 | Permitta W         | W   | 0.506      | 0.250        | 0.003 (0.000)    | 0.135 (0.017)    | 0 (0.000) |     7.68 | elybalich88, neosoznala, slabosilnaya, Sof1ra, valencia |
|            1 |     2622 | 2024-11-16 | Elite Klan Violet  | W   | 0.500      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.43 | elybalich88, neosoznala, slabosilnaya, Sof1ra, valencia |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($716.02)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.786 | $750.00        | $589.38         |
| 2024-11-17 |      0.507 | $250.00        | $126.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
