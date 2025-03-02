### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [133](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [26]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  817.4<br />
<br />
Final Rank Value (817.4) = Starting Rank Value (837.7) + Head To Head Adjustments (-20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.245[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.7
- 400 + ( ( 0.212 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 837.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1530 | 2024-12-14 | Party Astronauts   | L   | 0.694      | -            | -                | -                | -         |   -10.32 | brett, den1ed, jason, slump, Wolffe  |
|           35 |     1856 | 2024-12-08 | BLUEJAYS           | L   | 0.653      | -            | -                | -                | -         |    -7.40 | brett, jason, nooz, slump, Wolffe    |
|           34 |     1903 | 2024-12-07 | Party Astronauts   | W   | 0.649      | 0.384        | 0.009 (0.002)    | 0.557 (0.139)    | 1 (0.649) |    10.79 | brett, jason, nooz, slump, Wolffe    |
|           33 |     1911 | 2024-12-07 | Bad News Capybaras | W   | 0.648      | 0.384        | 0.001 (0.000)    | 0.224 (0.056)    | 1 (0.648) |     6.00 | brett, jason, nooz, slump, Wolffe    |
|           32 |     1926 | 2024-12-07 | What's for Dinner  | W   | 0.646      | -            | -                | -                | 1 (0.646) |     1.74 | brett, jason, nooz, slump, Wolffe    |
|           31 |     1966 | 2024-12-06 | ROOMBA PEEK        | L   | 0.642      | -            | -                | -                | -         |   -16.59 | brett, jason, nooz, slump, Wolffe    |
|           30 |     4816 | 2024-10-15 | BLUEJAYS           | L   | 0.295      | -            | -                | -                | -         |    -3.42 | ayy, brett, jason, nooz, slump       |
|           29 |     4903 | 2024-10-13 | Fisher College     | L   | 0.281      | -            | -                | -                | -         |    -4.92 | brett, jason, nooz, slump, Wolffe    |
|           28 |     4904 | 2024-10-13 | InControl          | W   | 0.280      | 0.262        | 0.002 (0.000)    | 0.094 (0.007)    | 0 (0.000) |     2.22 | brett, jason, nooz, slump, Wolffe    |
|           27 |     4952 | 2024-10-12 | Final Form         | W   | 0.274      | 0.262        | -                | 0.083 (0.006)    | 0 (0.000) |     2.04 | brett, jason, nooz, slump, Wolffe    |
|           26 |     4955 | 2024-10-12 | MCS Gaming         | W   | 0.274      | 0.262        | 0.003 (0.000)    | 0.169 (0.012)    | 0 (0.000) |     2.26 | brett, jason, nooz, slump, Wolffe    |
|           25 |     4957 | 2024-10-12 | Team Aether        | W   | 0.274      | -            | -                | -                | 0 (0.000) |     1.28 | brett, jason, nooz, slump, Wolffe    |
|           24 |     4960 | 2024-10-12 | Holly Molly        | W   | 0.273      | -            | -                | -                | 0 (0.000) |     0.70 | brett, jason, nooz, slump, Wolffe    |
|           23 |     4966 | 2024-10-12 | Final Form         | L   | 0.273      | -            | -                | -                | -         |    -6.63 | brett, jason, nooz, slump, Wolffe    |
|           22 |     5089 | 2024-10-09 | Chill Guys         | L   | 0.255      | -            | -                | -                | -         |    -4.18 | ayy, brett, jason, nooz, slump       |
|           21 |     5095 | 2024-10-09 | Chill Guys         | L   | 0.255      | -            | -                | -                | -         |    -4.27 | ayy, brett, jason, nooz, slump       |
|           20 |     5161 | 2024-10-08 | Timbermen          | L   | 0.248      | -            | -                | -                | -         |    -5.87 | ayy, brett, jason, nooz, slump       |
|           19 |     5167 | 2024-10-08 | Timbermen          | W   | 0.248      | 0.477        | 0.003 (0.000)    | 0.045 (0.005)    | 0 (0.000) |     1.97 | ayy, brett, jason, nooz, slump       |
|           18 |     5232 | 2024-10-07 | BLUEJAYS           | L   | 0.242      | -            | -                | -                | -         |    -3.01 | ayy, brett, jason, nooz, slump       |
|           17 |     5234 | 2024-10-07 | BLUEJAYS           | W   | 0.241      | 0.477        | 0.017 (0.002)    | 0.381 (0.044)    | 0 (0.000) |     4.67 | ayy, brett, jason, nooz, slump       |
|           16 |     5337 | 2024-10-05 | BLUEJAYS           | L   | 0.228      | -            | -                | -                | -         |    -2.81 | brett, jason, nooz, slump, Wolffe    |
|           15 |     5341 | 2024-10-05 | Legacy             | W   | 0.227      | 0.371        | 0.043 (0.004)    | 0.660 (0.056)    | -         |     4.33 | brett, consti, jason, slump, Wolffe  |
|           14 |     5434 | 2024-10-04 | Timbermen          | W   | 0.220      | 0.371        | 0.003 (0.000)    | -                | -         |     1.80 | brett, jason, nooz, slump, Wolffe    |
|           13 |     5603 | 2024-10-01 | Chill Guys         | W   | 0.201      | 0.371        | 0.004 (0.000)    | 0.664 (0.050)    | -         |     3.08 | brett, jason, nooz, slump, Wolffe    |
|           12 |     6210 | 2024-09-23 | LAG Gaming         | W   | 0.148      | -            | -                | -                | -         |     1.09 | ayy, brett, jason, nooz, slump       |
|           11 |     6214 | 2024-09-23 | LAG Gaming         | W   | 0.148      | -            | -                | -                | -         |     1.09 | ayy, brett, jason, nooz, slump       |
|           10 |     6290 | 2024-09-22 | NRG                | L   | 0.140      | -            | -                | -                | -         |    -0.80 | brett, C4LLM3SU3, jason, nooz, slump |
|            9 |     6339 | 2024-09-21 | Legacy             | W   | 0.134      | 0.303        | 0.043 (0.002)    | 0.660 (0.027)    | -         |     2.35 | ayy, brett, jason, nooz, slump       |
|            8 |     6391 | 2024-09-20 | MIGHT              | W   | 0.128      | -            | -                | -                | -         |     1.62 | brett, C4LLM3SU3, jason, nooz, slump |
|            7 |     6393 | 2024-09-20 | VitaPLUR           | W   | 0.128      | -            | -                | -                | -         |     0.54 | brett, C4LLM3SU3, jason, nooz, slump |
|            6 |     6400 | 2024-09-20 | OutGoing eSports   | W   | 0.128      | -            | -                | -                | -         |     0.32 | brett, C4LLM3SU3, jason, nooz, slump |
|            5 |     7427 | 2024-09-04 | Bad News Capybaras | W   | 0.022      | -            | -                | -                | -         |     0.22 | ayy, brett, jason, nooz, slump       |
|            4 |     7428 | 2024-09-04 | Bad News Capybaras | W   | 0.021      | -            | -                | -                | -         |     0.22 | ayy, brett, jason, nooz, slump       |
|            3 |     7485 | 2024-09-03 | Legacy             | L   | 0.015      | -            | -                | -                | -         |    -0.21 | ayy, brett, jason, nooz, slump       |
|            2 |     7495 | 2024-09-03 | Legacy             | L   | 0.015      | -            | -                | -                | -         |    -0.20 | ayy, brett, jason, nooz, slump       |
|            1 |     7588 | 2024-09-01 | Team Liquid        | L   | 0.000      | -            | -                | -                | -         |    -0.00 | brett, jason, MarKE, nooz, slump     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,693.08)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.327 | $2,000.00      | $654.68         |
| 2024-10-13 |      0.281 | $450.00        | $126.27         |
| 2024-10-05 |      0.228 | $4,000.00      | $912.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
