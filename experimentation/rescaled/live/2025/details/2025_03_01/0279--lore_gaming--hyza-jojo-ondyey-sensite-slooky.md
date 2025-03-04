### Roster Details<br />
Team Name: Lore Gaming<br />
Roster: hyza, JoJo, ondyey, seNsite, SlooKy<br />
Global Rank: [279](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [150]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  404.2<br />
<br />
Final Rank Value (404.2) = Starting Rank Value (400.0) + Head To Head Adjustments (4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2271 | 2024-10-02 | Legacy                  | L   | 0.201      | -            | -                | -                | -         |    -0.35 | hyza, JoJo, ondyey, seNsite, SlooKy |
|            5 |     2578 | 2024-09-24 | InControl               | W   | 0.148      | 0.404        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.32 | hyza, JoJo, ondyey, seNsite, SlooKy |
|            4 |     2667 | 2024-09-22 | Penance (American Team) | W   | 0.133      | 0.404        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     2.10 | hyza, JoJo, ondyey, seNsite, SlooKy |
|            3 |     2765 | 2024-09-18 | What's for Dinner       | W   | 0.108      | 0.404        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.70 | hyza, JoJo, ondyey, seNsite, SlooKy |
|            2 |     2868 | 2024-09-14 | Final Form              | L   | 0.082      | -            | -                | -                | -         |    -0.94 | hyza, JoJo, ondyey, seNsite, SlooKy |
|            1 |     2931 | 2024-09-12 | Team Canada             | L   | 0.068      | -            | -                | -                | -         |    -0.68 | hyza, JoJo, ondyey, seNsite, SlooKy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
