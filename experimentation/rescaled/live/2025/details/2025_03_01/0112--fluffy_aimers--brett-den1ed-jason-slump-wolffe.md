### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [112](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [23]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  775.8<br />
<br />
Final Rank Value (775.8) = Starting Rank Value (791.4) + Head To Head Adjustments (-15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.4
- 400 + ( ( 0.206 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 791.4


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
|           28 |      863 | 2024-12-14 | Party Astronauts   | L   | 0.688      | -            | -                | -                | -         |   -10.45 | brett, den1ed, jason, slump, Wolffe  |
|           27 |      961 | 2024-12-08 | BOSS               | L   | 0.647      | -            | -                | -                | -         |    -6.31 | brett, jason, nooz, slump, Wolffe    |
|           26 |      974 | 2024-12-07 | Party Astronauts   | W   | 0.642      | 0.609        | 0.008 (0.003)    | 0.430 (0.168)    | 1 (0.642) |    10.50 | brett, jason, nooz, slump, Wolffe    |
|           25 |      978 | 2024-12-07 | Bad News Capybaras | W   | 0.642      | 0.609        | 0.001 (0.000)    | 0.148 (0.058)    | 1 (0.642) |     6.82 | brett, jason, nooz, slump, Wolffe    |
|           24 |      986 | 2024-12-07 | What's for Dinner  | W   | 0.640      | -            | -                | -                | 1 (0.640) |     2.15 | brett, jason, nooz, slump, Wolffe    |
|           23 |     1000 | 2024-12-06 | ROOMBA PEEK        | L   | 0.636      | -            | -                | -                | -         |   -15.83 | brett, jason, nooz, slump, Wolffe    |
|           22 |     1951 | 2024-10-15 | BOSS               | L   | 0.288      | -            | -                | -                | -         |    -2.73 | ayy, brett, jason, nooz, slump       |
|           21 |     1968 | 2024-10-13 | Fisher College     | L   | 0.274      | -            | -                | -                | -         |    -4.99 | brett, jason, nooz, slump, Wolffe    |
|           20 |     1969 | 2024-10-13 | InControl          | W   | 0.274      | 0.482        | 0.001 (0.000)    | 0.075 (0.010)    | 0 (0.000) |     2.38 | brett, jason, nooz, slump, Wolffe    |
|           19 |     1976 | 2024-10-12 | Final Form         | W   | 0.268      | 0.483        | -                | 0.057 (0.007)    | 0 (0.000) |     1.37 | brett, jason, nooz, slump, Wolffe    |
|           18 |     2009 | 2024-10-09 | Chill Guys         | L   | 0.249      | -            | -                | -                | -         |    -5.47 | ayy, brett, jason, nooz, slump       |
|           17 |     2015 | 2024-10-09 | Chill Guys         | L   | 0.248      | -            | -                | -                | -         |    -5.57 | ayy, brett, jason, nooz, slump       |
|           16 |     2065 | 2024-10-08 | Timbermen          | L   | 0.242      | -            | -                | -                | -         |    -4.31 | ayy, brett, jason, nooz, slump       |
|           15 |     2071 | 2024-10-08 | Timbermen          | W   | 0.242      | 0.606        | 0.011 (0.002)    | 0.205 (0.030)    | 0 (0.000) |     3.36 | ayy, brett, jason, nooz, slump       |
|           14 |     2116 | 2024-10-07 | BOSS               | L   | 0.235      | -            | -                | -                | -         |    -2.41 | ayy, brett, jason, nooz, slump       |
|           13 |     2118 | 2024-10-07 | BOSS               | W   | 0.235      | 0.608        | 0.014 (0.002)    | 0.410 (0.059)    | 0 (0.000) |     5.08 | ayy, brett, jason, nooz, slump       |
|           12 |     2166 | 2024-10-05 | BOSS               | L   | 0.222      | -            | -                | -                | -         |    -2.22 | brett, jason, nooz, slump, Wolffe    |
|           11 |     2168 | 2024-10-05 | Legacy             | W   | 0.221      | 0.371        | 0.033 (0.003)    | 0.669 (0.055)    | 0 (0.000) |     5.30 | brett, consti, jason, slump, Wolffe  |
|           10 |     2199 | 2024-10-04 | Timbermen          | W   | 0.214      | -            | -                | -                | 0 (0.000) |     1.12 | brett, jason, nooz, slump, Wolffe    |
|            9 |     2317 | 2024-10-01 | Chill Guys         | W   | 0.195      | 0.371        | 0.002 (0.000)    | 0.173 (0.013)    | 0 (0.000) |     1.81 | brett, jason, nooz, slump, Wolffe    |
|            8 |     2627 | 2024-09-23 | LAG Gaming         | W   | 0.142      | 0.477        | 0.001 (0.000)    | 0.028 (0.002)    | -         |     1.17 | ayy, brett, jason, nooz, slump       |
|            7 |     2631 | 2024-09-23 | LAG Gaming         | W   | 0.142      | 0.477        | 0.001 (0.000)    | -                | -         |     1.18 | ayy, brett, jason, nooz, slump       |
|            6 |     2668 | 2024-09-22 | NRG                | L   | 0.133      | -            | -                | -                | -         |    -0.77 | brett, C4LLM3SU3, jason, nooz, slump |
|            5 |     2690 | 2024-09-21 | Legacy             | W   | 0.128      | 0.303        | 0.033 (0.001)    | 0.669 (0.026)    | -         |     3.02 | ayy, brett, jason, nooz, slump       |
|            4 |     3160 | 2024-09-04 | Bad News Capybaras | W   | 0.015      | -            | -                | -                | -         |     0.16 | ayy, brett, jason, nooz, slump       |
|            3 |     3161 | 2024-09-04 | Bad News Capybaras | W   | 0.015      | -            | -                | -                | -         |     0.16 | ayy, brett, jason, nooz, slump       |
|            2 |     3190 | 2024-09-03 | Legacy             | L   | 0.009      | -            | -                | -                | -         |    -0.07 | ayy, brett, jason, nooz, slump       |
|            1 |     3192 | 2024-09-03 | Legacy             | L   | 0.008      | -            | -                | -                | -         |    -0.07 | ayy, brett, jason, nooz, slump       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,652.91)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.321 | $2,000.00      | $642.22         |
| 2024-10-13 |      0.274 | $450.00        | $123.47         |
| 2024-10-05 |      0.222 | $4,000.00      | $887.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
