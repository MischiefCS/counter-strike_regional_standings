### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [99](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  811.0<br />
<br />
Final Rank Value (811.0) = Starting Rank Value (785.2) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.2
- 400 + ( ( 0.202 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 785.2


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
|           37 |      351 | 2025-02-10 | MIGHT                | L   | 1.000      | -            | -                | -                | -         |   -19.22 | ben1337, FaNg, ogwizard, viz, Walco        |
|           36 |      395 | 2025-02-09 | Chicken Coop Esports | W   | 1.000      | 0.460        | 0.006 (0.003)    | 0.096 (0.044)    | 0 (0.000) |     7.82 | ben1337, FaNg, ogwizard, viz, Walco        |
|           35 |      420 | 2025-02-08 | Akimbo Esports       | W   | 1.000      | 0.529        | 0.003 (0.001)    | 0.090 (0.048)    | 0 (0.000) |     8.06 | ben1337, FaNg, ogwizard, viz, Walco        |
|           34 |      424 | 2025-02-08 | Chill Guys           | W   | 1.000      | 0.529        | 0.002 (0.001)    | 0.173 (0.092)    | 0 (0.000) |     9.41 | ben1337, FaNg, ogwizard, viz, Walco        |
|           33 |      443 | 2025-02-08 | MIGHT                | W   | 1.000      | 0.459        | -                | 0.289 (0.133)    | 0 (0.000) |    12.19 | ben1337, FaNg, ogwizard, viz, Walco        |
|           32 |      842 | 2024-12-15 | NRG                  | L   | 0.694      | -            | -                | -                | -         |    -4.16 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           31 |      863 | 2024-12-14 | FLUFFY AIMERS        | W   | 0.688      | 0.820        | 0.005 (0.003)    | 0.223 (0.126)    | 0 (0.000) |    10.49 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           30 |      974 | 2024-12-07 | FLUFFY AIMERS        | L   | 0.642      | -            | -                | -                | -         |   -10.45 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           29 |      983 | 2024-12-07 | Nouns Esports        | L   | 0.641      | -            | -                | -                | -         |    -7.85 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           28 |     1009 | 2024-12-06 | Take Flyte Kings     | W   | 0.635      | -            | -                | -                | 1 (0.635) |     1.89 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           27 |     1272 | 2024-11-23 | Timbermen            | L   | 0.548      | -            | -                | -                | -         |   -10.16 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           26 |     1871 | 2024-10-18 | NRG                  | L   | 0.308      | -            | -                | -                | -         |    -2.27 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           25 |     1898 | 2024-10-17 | Nouns Esports        | W   | 0.302      | 0.847        | 0.006 (0.001)    | -                | 0 (0.000) |     4.10 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           24 |     1923 | 2024-10-16 | Familia Maquininha   | W   | 0.295      | -            | -                | -                | 0 (0.000) |     2.96 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           23 |     1948 | 2024-10-15 | NRG                  | L   | 0.288      | -            | -                | -                | -         |    -2.13 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           22 |     2011 | 2024-10-09 | Wildcard             | W   | 0.249      | 0.877        | 0.176 (0.038)    | 0.528 (0.115)    | 0 (0.000) |     7.48 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           21 |     2018 | 2024-10-09 | Wildcard             | W   | 0.248      | 0.877        | 0.176 (0.038)    | 0.528 (0.115)    | 0 (0.000) |     7.50 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           20 |     2066 | 2024-10-08 | Chill Guys           | W   | 0.242      | -            | -                | -                | -         |     2.29 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           19 |     2072 | 2024-10-08 | Chill Guys           | W   | 0.242      | 0.912        | -                | 0.173 (0.038)    | -         |     2.33 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           18 |     2170 | 2024-10-05 | BOSS                 | L   | 0.220      | -            | -                | -                | -         |    -2.19 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           17 |     2226 | 2024-10-03 | Timbermen            | W   | 0.209      | 0.803        | 0.011 (0.002)    | -                | -         |     2.94 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           16 |     2232 | 2024-10-03 | Timbermen            | L   | 0.208      | -            | -                | -                | -         |    -3.68 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           15 |     2236 | 2024-10-03 | Nouns Esports        | W   | 0.207      | -            | -                | -                | -         |     2.84 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           14 |     2310 | 2024-10-01 | M80                  | L   | 0.195      | -            | -                | -                | -         |    -1.62 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           13 |     2316 | 2024-10-01 | M80                  | W   | 0.195      | 0.813        | 0.038 (0.006)    | 0.456 (0.072)    | -         |     4.58 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           12 |     2386 | 2024-09-29 | Undone               | W   | 0.182      | -            | -                | -                | -         |     2.72 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           11 |     2427 | 2024-09-27 | MarcaRegistrada      | L   | 0.168      | -            | -                | -                | -         |    -4.47 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           10 |     2431 | 2024-09-27 | Team Aether          | W   | 0.168      | -            | -                | -                | -         |     0.79 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            9 |     2513 | 2024-09-25 | Familia Maquininha   | W   | 0.155      | -            | -                | -                | -         |     1.66 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            8 |     2517 | 2024-09-25 | Familia Maquininha   | W   | 0.155      | -            | -                | -                | -         |     1.67 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            7 |     2574 | 2024-09-24 | BOSS                 | L   | 0.149      | -            | -                | -                | -         |    -1.45 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            6 |     2581 | 2024-09-24 | BOSS                 | W   | 0.148      | 0.854        | 0.014 (0.002)    | 0.410 (0.052)    | -         |     3.26 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            5 |     2689 | 2024-09-21 | NRG                  | L   | 0.128      | -            | -                | -                | -         |    -0.76 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            4 |     2759 | 2024-09-18 | Legacy               | L   | 0.109      | -            | -                | -                | -         |    -0.91 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            3 |     2764 | 2024-09-18 | Legacy               | L   | 0.108      | -            | -                | -                | -         |    -0.91 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            2 |     2793 | 2024-09-17 | Mythic               | W   | 0.102      | -            | -                | -                | -         |     0.52 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            1 |     2796 | 2024-09-17 | Mythic               | W   | 0.102      | -            | -                | -                | -         |     0.52 | ben1337, FaNg, Infinite, ogwizard, Peeping |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,580.49)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.321 | $7,000.00      | $2,247.78       |
| 2024-10-05 |      0.222 | $1,500.00      | $332.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
