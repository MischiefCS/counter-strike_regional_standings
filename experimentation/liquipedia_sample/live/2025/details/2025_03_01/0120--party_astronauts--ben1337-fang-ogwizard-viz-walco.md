### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [120](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  793.0<br />
<br />
Final Rank Value (793.0) = Starting Rank Value (735.4) + Head To Head Adjustments (57.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.4
- 400 + ( ( 0.170 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 735.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      373 | 2025-02-09 | Chicken Coop Esports | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.173 (0.025)    | 0 (0.000) |     9.88 | ben1337, FaNg, ogwizard, viz, Walco        |
|           35 |      401 | 2025-02-08 | Akimbo Esports       | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.258 (0.037)    | 0 (0.000) |    11.12 | ben1337, FaNg, ogwizard, viz, Walco        |
|           34 |      404 | 2025-02-08 | Chill Guys           | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.344 (0.049)    | 0 (0.000) |    13.00 | ben1337, FaNg, ogwizard, viz, Walco        |
|           33 |      420 | 2025-02-08 | MIGHT                | W   | 1.000      | 0.143        | -                | 0.224 (0.032)    | 0 (0.000) |    12.66 | ben1337, FaNg, ogwizard, viz, Walco        |
|           32 |      483 | 2025-02-07 | Mythic               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.24 | ben1337, FaNg, ogwizard, viz, Walco        |
|           31 |     1227 | 2024-12-15 | NRG                  | L   | 0.694      | -            | -                | -                | -         |    -3.86 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           30 |     1276 | 2024-12-14 | FLUFFY AIMERS        | W   | 0.688      | 0.303        | 0.005 (0.001)    | 0.251 (0.052)    | 0 (0.000) |    12.23 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           29 |     1637 | 2024-12-07 | FLUFFY AIMERS        | L   | 0.642      | -            | -                | -                | -         |    -8.71 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           28 |     1657 | 2024-12-07 | Nouns Esports        | L   | 0.641      | -            | -                | -                | -         |    -6.98 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           27 |     1713 | 2024-12-06 | Take Flyte Kings     | W   | 0.635      | -            | -                | -                | 1 (0.635) |     2.50 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           26 |     2398 | 2024-11-23 | Timbermen            | L   | 0.548      | -            | -                | -                | -         |    -9.58 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           25 |     4377 | 2024-10-18 | NRG                  | L   | 0.309      | -            | -                | -                | -         |    -2.05 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           24 |     4422 | 2024-10-17 | Nouns Esports        | W   | 0.302      | 0.477        | 0.006 (0.001)    | -                | 0 (0.000) |     4.74 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           23 |     4472 | 2024-10-16 | Familia Maquininha   | W   | 0.295      | 0.477        | 0.003 (0.000)    | -                | 0 (0.000) |     3.72 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           22 |     4541 | 2024-10-15 | NRG                  | L   | 0.289      | -            | -                | -                | -         |    -1.91 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           21 |     4862 | 2024-10-08 | Chill Guys           | W   | 0.242      | 0.477        | -                | 0.344 (0.040)    | 0 (0.000) |     2.82 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           20 |     4868 | 2024-10-08 | Chill Guys           | W   | 0.242      | 0.477        | -                | 0.344 (0.040)    | -         |     2.87 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           19 |     5041 | 2024-10-05 | BOSS                 | L   | 0.220      | -            | -                | -                | -         |    -2.09 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           18 |     5166 | 2024-10-03 | Timbermen            | W   | 0.209      | 0.477        | 0.011 (0.001)    | -                | -         |     3.04 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           17 |     5172 | 2024-10-03 | Timbermen            | L   | 0.209      | -            | -                | -                | -         |    -3.59 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           16 |     5181 | 2024-10-03 | Nouns Esports        | W   | 0.208      | 0.371        | 0.006 (0.000)    | -                | -         |     3.17 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           15 |     5272 | 2024-10-01 | M80                  | L   | 0.196      | -            | -                | -                | -         |    -1.76 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           14 |     5277 | 2024-10-01 | M80                  | W   | 0.195      | 0.477        | 0.039 (0.004)    | 0.407 (0.038)    | -         |     4.45 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           13 |     5400 | 2024-09-29 | Undone               | W   | 0.182      | 0.371        | -                | 0.314 (0.021)    | -         |     3.11 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           12 |     5539 | 2024-09-27 | MarcaRegistrada      | L   | 0.168      | -            | -                | -                | -         |    -3.60 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           11 |     5544 | 2024-09-27 | Team Aether          | W   | 0.168      | -            | -                | -                | -         |     1.13 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           10 |     5618 | 2024-09-26 | Tortuga              | W   | 0.162      | -            | -                | -                | -         |     0.65 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            9 |     5691 | 2024-09-25 | Familia Maquininha   | W   | 0.156      | -            | -                | -                | -         |     1.99 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            8 |     5696 | 2024-09-25 | Familia Maquininha   | W   | 0.155      | -            | -                | -                | -         |     2.01 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            7 |     5779 | 2024-09-24 | BOSS                 | L   | 0.149      | -            | -                | -                | -         |    -1.36 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            6 |     5783 | 2024-09-24 | BOSS                 | W   | 0.149      | 0.477        | 0.014 (0.001)    | 0.308 (0.022)    | -         |     3.35 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            5 |     5986 | 2024-09-21 | NRG                  | L   | 0.128      | -            | -                | -                | -         |    -0.70 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            4 |     6146 | 2024-09-18 | Legacy               | L   | 0.109      | -            | -                | -                | -         |    -1.14 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            3 |     6153 | 2024-09-18 | Legacy               | L   | 0.109      | -            | -                | -                | -         |    -1.15 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            2 |     6211 | 2024-09-17 | Mythic               | W   | 0.102      | -            | -                | -                | -         |     0.67 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            1 |     6222 | 2024-09-17 | Mythic               | W   | 0.102      | -            | -                | -                | -         |     0.68 | ben1337, FaNg, Infinite, ogwizard, Peeping |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,582.85)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.321 | $7,000.00      | $2,249.72       |
| 2024-10-05 |      0.222 | $1,500.00      | $333.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
