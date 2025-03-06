### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Global Rank: [76](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [19]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  424.1<br />
<br />
Final Rank Value (424.1) = Starting Rank Value (402.9) + Head To Head Adjustments (21.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.9
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 402.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      261 | 2025-02-14 | BOSS               | W   | 0.246      | 0.143        | 0.000 (0.000)    | 0.280 (0.010)    | 0 (0.000) |     3.70 | Lake, reck, s1n, slaxz-, Swisher |
|            6 |      267 | 2025-02-14 | NRG                | W   | 0.245      | 0.143        | 0.000 (0.000)    | 0.365 (0.013)    | 0 (0.000) |     3.85 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |      288 | 2025-02-13 | Nouns Esports      | W   | 0.239      | 0.143        | 0.000 (0.000)    | 0.263 (0.009)    | 0 (0.000) |     3.63 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |      350 | 2025-02-10 | Marsborne          | W   | 0.220      | 0.143        | 0.000 (0.000)    | 0.249 (0.008)    | 0 (0.000) |     3.47 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |      389 | 2025-02-09 | Marsborne          | W   | 0.213      | 0.143        | 0.000 (0.000)    | 0.249 (0.008)    | 0 (0.000) |     3.38 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |      442 | 2025-02-08 | Bad News Capybaras | W   | 0.205      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.20 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |      681 | 2025-01-16 | FaZe Clan          | L   | 0.051      | -            | -                | -                | -         |     0.00 | k1to, Lake, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
