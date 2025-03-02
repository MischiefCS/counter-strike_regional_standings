### Roster Details<br />
Team Name: Case Esports<br />
Roster: bsd, nyezin, RICIOLI, urban0, yepz<br />
Global Rank: [216](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  697.3<br />
<br />
Final Rank Value (697.3) = Starting Rank Value (679.8) + Head To Head Adjustments (17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 679.8
- 400 + ( ( 0.142 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 679.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     3066 | 2024-11-13 | RED Canids        | L   | 0.477      | -            | -                | -                | -         |    -4.96 | bsd, nyezin, RICIOLI, urban0, yepz |
|           18 |     3107 | 2024-11-12 | FURIA             | L   | 0.471      | -            | -                | -                | -         |    -0.27 | bsd, nyezin, RICIOLI, urban0, yepz |
|           17 |     3120 | 2024-11-11 | Imperial Esports  | L   | 0.470      | -            | -                | -                | -         |    -2.52 | bsd, nyezin, RICIOLI, urban0, yepz |
|           16 |     3386 | 2024-11-07 | ALASKA            | W   | 0.438      | 0.333        | 0.030 (0.004)    | 0.910 (0.133)    | 0 (0.000) |    11.94 | bsd, nyezin, RICIOLI, urban0, yepz |
|           15 |     3551 | 2024-11-04 | Illuminar Gaming  | L   | 0.417      | -            | -                | -                | -         |    -3.76 | bsd, nyezin, RICIOLI, urban0, yepz |
|           14 |     3779 | 2024-10-31 | ALASKA            | W   | 0.392      | 0.333        | 0.030 (0.004)    | 0.910 (0.119)    | 0 (0.000) |    10.84 | bsd, nyezin, RICIOLI, urban0, yepz |
|           13 |     4815 | 2024-10-09 | Hype Esports      | W   | 0.248      | 0.450        | 0.001 (0.000)    | 0.076 (0.009)    | 0 (0.000) |     3.84 | bsd, nyezin, RICIOLI, urban0, yepz |
|           12 |     4822 | 2024-10-09 | Hype Esports      | L   | 0.248      | -            | -                | -                | -         |    -4.04 | bsd, nyezin, RICIOLI, urban0, yepz |
|           11 |     4874 | 2024-10-08 | Sharks Esports    | L   | 0.241      | -            | -                | -                | -         |    -1.05 | bsd, nyezin, RICIOLI, urban0, yepz |
|           10 |     4879 | 2024-10-08 | Sharks Esports    | L   | 0.241      | -            | -                | -                | -         |    -1.06 | bsd, nyezin, RICIOLI, urban0, yepz |
|            9 |     5228 | 2024-10-02 | BESTIA            | L   | 0.200      | -            | -                | -                | -         |    -1.42 | bsd, nyezin, RICIOLI, urban0, yepz |
|            8 |     5230 | 2024-10-02 | BESTIA            | L   | 0.200      | -            | -                | -                | -         |    -1.44 | bsd, nyezin, RICIOLI, urban0, yepz |
|            7 |     5283 | 2024-10-01 | MIBR              | L   | 0.195      | -            | -                | -                | -         |    -0.10 | bsd, nyezin, RICIOLI, urban0, yepz |
|            6 |     5285 | 2024-10-01 | MIBR              | W   | 0.195      | 0.450        | 0.141 (0.012)    | 0.507 (0.044)    | 0 (0.000) |     6.04 | bsd, nyezin, RICIOLI, urban0, yepz |
|            5 |     5541 | 2024-09-27 | Team Solid        | L   | 0.168      | -            | -                | -                | -         |    -1.58 | bsd, nyezin, RICIOLI, urban0, yepz |
|            4 |     5551 | 2024-09-27 | Bad News Chickens | W   | 0.168      | 0.143        | 0.003 (0.000)    | 0.262 (0.006)    | 0 (0.000) |     2.67 | bsd, nyezin, RICIOLI, urban0, yepz |
|            3 |     5630 | 2024-09-26 | UNO MILLE         | W   | 0.161      | 0.143        | 0.010 (0.000)    | 0.546 (0.013)    | 0 (0.000) |     2.94 | bsd, nyezin, RICIOLI, urban0, yepz |
|            2 |     5729 | 2024-09-25 | Dusty Roots       | W   | 0.154      | 0.450        | 0.008 (0.001)    | 0.398 (0.028)    | 0 (0.000) |     3.13 | bsd, nyezin, RICIOLI, urban0, yepz |
|            1 |     5732 | 2024-09-25 | Dusty Roots       | L   | 0.153      | -            | -                | -                | -         |    -1.73 | bsd, nyezin, RICIOLI, urban0, yepz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($480.63)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.320 | $1,500.00      | $480.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
