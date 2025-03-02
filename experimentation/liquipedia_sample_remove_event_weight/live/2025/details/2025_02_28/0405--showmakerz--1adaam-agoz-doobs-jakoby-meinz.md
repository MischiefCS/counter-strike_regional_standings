### Roster Details<br />
Team Name: Showmakerz<br />
Roster: 1Adaam, agoz, Doobs, jakoby, Meinz<br />
Global Rank: [405](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [255]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  625.1<br />
<br />
Final Rank Value (625.1) = Starting Rank Value (623.1) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 623.1
- 400 + ( ( 0.112 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 623.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3719 | 2024-11-05 | Johnny Speeds | L   | 0.433      | -            | -                | -                | -         |    -0.92 | 1Adaam, agoz, Doobs, jakoby, Meinz      |
|            7 |     3961 | 2024-11-01 | NIP Svea      | W   | 0.406      | 1.000        | 0.000 (0.000)    | 0.052 (0.021)    | 0 (0.000) |     2.97 | 1Adaam, agoz, Doobs, jakoby, Meinz      |
|            6 |     5635 | 2024-10-01 | Kario Mart    | W   | 0.199      | 1.000        | 0.004 (0.001)    | 0.070 (0.014)    | 0 (0.000) |     3.37 | 1Adaam, agoz, Doobs, jakoby, Meinz      |
|            5 |     6380 | 2024-09-21 | Deathsquad    | W   | 0.131      | 1.000        | 0.000 (0.000)    | 0.013 (0.002)    | 0 (0.000) |     0.93 | 1Adaam, agoz, Doobs, jakoby, Meinz      |
|            4 |     6536 | 2024-09-18 | Lemondogs     | L   | 0.113      | -            | -                | -                | -         |    -2.40 | bsover, Doobs, jakoby, Leon1das, meinz  |
|            3 |     6770 | 2024-09-14 | KILLBOX       | L   | 0.086      | -            | -                | -                | -         |    -1.87 | 1Adaam, agoz, Doobs, jakoby, Meinz      |
|            2 |     7027 | 2024-09-10 | Megoshort     | L   | 0.060      | -            | -                | -                | -         |    -1.15 | agoz, Doobs, jakoby, Leon1das, PornyBig |
|            1 |     7084 | 2024-09-09 | GODSENT       | W   | 0.052      | 1.000        | 0.001 (0.000)    | 0.298 (0.016)    | 0 (0.000) |     1.06 | agoz, Doobs, jakoby, Leon1das, PornyBig |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($222.78)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-13 |      0.486 | $458.19        | $222.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
