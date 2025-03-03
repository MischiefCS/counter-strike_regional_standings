### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [102](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  796.2<br />
<br />
Final Rank Value (796.2) = Starting Rank Value (765.1) + Head To Head Adjustments (31.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.1
- 400 + ( ( 0.187 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 765.1


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
|           37 |      484 | 2025-02-10 | MIGHT                | L   | 1.000      | -            | -                | -                | -         |   -19.04 | ben1337, FaNg, ogwizard, viz, Walco        |
|           36 |      530 | 2025-02-09 | Chicken Coop Esports | W   | 1.000      | 0.143        | 0.006 (0.001)    | -                | 0 (0.000) |     8.47 | ben1337, FaNg, ogwizard, viz, Walco        |
|           35 |      563 | 2025-02-08 | Akimbo Esports       | W   | 1.000      | 0.143        | -                | 0.324 (0.046)    | 0 (0.000) |     8.77 | ben1337, FaNg, ogwizard, viz, Walco        |
|           34 |      567 | 2025-02-08 | Chill Guys           | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.318 (0.045)    | 0 (0.000) |    11.37 | ben1337, FaNg, ogwizard, viz, Walco        |
|           33 |      586 | 2025-02-08 | MIGHT                | W   | 1.000      | 0.143        | -                | 0.492 (0.070)    | 0 (0.000) |    12.49 | ben1337, FaNg, ogwizard, viz, Walco        |
|           32 |     1400 | 2024-12-15 | NRG                  | L   | 0.694      | -            | -                | -                | -         |    -4.58 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           31 |     1441 | 2024-12-14 | FLUFFY AIMERS        | W   | 0.688      | 0.303        | 0.005 (0.001)    | 0.207 (0.043)    | 0 (0.000) |    11.03 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           30 |     1731 | 2024-12-07 | FLUFFY AIMERS        | L   | 0.642      | -            | -                | -                | -         |    -9.89 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           29 |     1742 | 2024-12-07 | Nouns Esports        | L   | 0.641      | -            | -                | -                | -         |    -8.06 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           28 |     1786 | 2024-12-06 | Take Flyte           | W   | 0.635      | 0.384        | -                | 0.167 (0.041)    | 1 (0.635) |     3.25 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           27 |     2351 | 2024-11-23 | Timbermen            | L   | 0.548      | -            | -                | -                | -         |   -10.42 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           26 |     3486 | 2024-10-18 | NRG                  | L   | 0.308      | -            | -                | -                | -         |    -2.46 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           25 |     3513 | 2024-10-17 | Nouns Esports        | W   | 0.302      | 0.477        | 0.006 (0.001)    | -                | 0 (0.000) |     4.20 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           24 |     3538 | 2024-10-16 | Familia Maquininha   | W   | 0.295      | -            | -                | -                | 0 (0.000) |     3.33 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           23 |     3563 | 2024-10-15 | NRG                  | L   | 0.288      | -            | -                | -                | -         |    -2.29 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           22 |     3626 | 2024-10-09 | Wildcard             | W   | 0.249      | 0.477        | 0.176 (0.021)    | 0.491 (0.058)    | 0 (0.000) |     7.45 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           21 |     3633 | 2024-10-09 | Wildcard             | W   | 0.248      | 0.477        | 0.176 (0.021)    | 0.491 (0.058)    | 0 (0.000) |     7.47 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           20 |     3681 | 2024-10-08 | Chill Guys           | W   | 0.242      | 0.477        | -                | 0.318 (0.037)    | -         |     2.54 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           19 |     3687 | 2024-10-08 | Chill Guys           | W   | 0.242      | 0.477        | -                | 0.318 (0.037)    | -         |     2.59 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           18 |     3785 | 2024-10-05 | BOSS                 | L   | 0.220      | -            | -                | -                | -         |    -2.33 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           17 |     3841 | 2024-10-03 | Timbermen            | W   | 0.209      | 0.477        | 0.011 (0.001)    | -                | -         |     2.82 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           16 |     3847 | 2024-10-03 | Timbermen            | L   | 0.208      | -            | -                | -                | -         |    -3.80 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           15 |     3851 | 2024-10-03 | Nouns Esports        | W   | 0.207      | 0.371        | 0.006 (0.000)    | -                | -         |     2.92 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           14 |     3925 | 2024-10-01 | M80                  | L   | 0.195      | -            | -                | -                | -         |    -1.97 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           13 |     3931 | 2024-10-01 | M80                  | W   | 0.195      | 0.477        | 0.038 (0.004)    | 0.536 (0.050)    | -         |     4.23 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           12 |     4001 | 2024-09-29 | Undone               | W   | 0.182      | -            | -                | -                | -         |     2.88 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           11 |     4042 | 2024-09-27 | MarcaRegistrada      | L   | 0.168      | -            | -                | -                | -         |    -3.78 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           10 |     4046 | 2024-09-27 | Team Aether          | W   | 0.168      | -            | -                | -                | -         |     0.94 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            9 |     4128 | 2024-09-25 | Familia Maquininha   | W   | 0.155      | -            | -                | -                | -         |     1.88 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            8 |     4132 | 2024-09-25 | Familia Maquininha   | W   | 0.155      | -            | -                | -                | -         |     1.91 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            7 |     4189 | 2024-09-24 | BOSS                 | L   | 0.149      | -            | -                | -                | -         |    -1.54 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            6 |     4196 | 2024-09-24 | BOSS                 | W   | 0.148      | 0.477        | 0.014 (0.001)    | -                | -         |     3.17 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            5 |     4308 | 2024-09-21 | NRG                  | L   | 0.128      | -            | -                | -                | -         |    -0.81 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            4 |     4389 | 2024-09-18 | Legacy               | L   | 0.109      | -            | -                | -                | -         |    -1.41 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            3 |     4394 | 2024-09-18 | Legacy               | L   | 0.108      | -            | -                | -                | -         |    -1.42 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            2 |     4427 | 2024-09-17 | Mythic               | W   | 0.102      | -            | -                | -                | -         |     0.59 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            1 |     4430 | 2024-09-17 | Mythic               | W   | 0.102      | -            | -                | -                | -         |     0.59 | ben1337, FaNg, Infinite, ogwizard, Peeping |

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
