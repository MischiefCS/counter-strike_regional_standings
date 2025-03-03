### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [115](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  770.7<br />
<br />
Final Rank Value (770.7) = Starting Rank Value (793.5) + Head To Head Adjustments (-22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.5
- 400 + ( ( 0.201 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 793.5


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
|           28 |     1441 | 2024-12-14 | Party Astronauts   | L   | 0.688      | -            | -                | -                | -         |   -11.03 | brett, den1ed, jason, slump, Wolffe  |
|           27 |     1682 | 2024-12-08 | BOSS               | L   | 0.647      | -            | -                | -                | -         |    -7.33 | brett, jason, nooz, slump, Wolffe    |
|           26 |     1731 | 2024-12-07 | Party Astronauts   | W   | 0.642      | 0.384        | 0.008 (0.002)    | 0.400 (0.099)    | 1 (0.642) |     9.89 | brett, jason, nooz, slump, Wolffe    |
|           25 |     1737 | 2024-12-07 | Bad News Capybaras | W   | 0.642      | 0.384        | 0.001 (0.000)    | 0.137 (0.034)    | 1 (0.642) |     6.36 | brett, jason, nooz, slump, Wolffe    |
|           24 |     1746 | 2024-12-07 | What's for Dinner  | W   | 0.640      | -            | -                | -                | 1 (0.640) |     2.17 | brett, jason, nooz, slump, Wolffe    |
|           23 |     1777 | 2024-12-06 | ROOMBA PEEK        | L   | 0.636      | -            | -                | -                | -         |   -15.87 | brett, jason, nooz, slump, Wolffe    |
|           22 |     3566 | 2024-10-15 | BOSS               | L   | 0.288      | -            | -                | -                | -         |    -3.21 | ayy, brett, jason, nooz, slump       |
|           21 |     3583 | 2024-10-13 | Fisher College     | L   | 0.274      | -            | -                | -                | -         |    -4.80 | brett, jason, nooz, slump, Wolffe    |
|           20 |     3584 | 2024-10-13 | InControl          | W   | 0.274      | 0.262        | 0.001 (0.000)    | 0.069 (0.005)    | 0 (0.000) |     2.35 | brett, jason, nooz, slump, Wolffe    |
|           19 |     3591 | 2024-10-12 | Final Form         | W   | 0.268      | 0.262        | -                | 0.058 (0.004)    | 0 (0.000) |     1.49 | brett, jason, nooz, slump, Wolffe    |
|           18 |     3624 | 2024-10-09 | Chill Guys         | L   | 0.249      | -            | -                | -                | -         |    -5.39 | ayy, brett, jason, nooz, slump       |
|           17 |     3630 | 2024-10-09 | Chill Guys         | L   | 0.248      | -            | -                | -                | -         |    -5.49 | ayy, brett, jason, nooz, slump       |
|           16 |     3680 | 2024-10-08 | Timbermen          | L   | 0.242      | -            | -                | -                | -         |    -4.76 | ayy, brett, jason, nooz, slump       |
|           15 |     3686 | 2024-10-08 | Timbermen          | W   | 0.242      | 0.477        | 0.011 (0.001)    | 0.190 (0.022)    | 0 (0.000) |     2.89 | ayy, brett, jason, nooz, slump       |
|           14 |     3731 | 2024-10-07 | BOSS               | L   | 0.235      | -            | -                | -                | -         |    -2.81 | ayy, brett, jason, nooz, slump       |
|           13 |     3733 | 2024-10-07 | BOSS               | W   | 0.235      | 0.477        | 0.014 (0.002)    | 0.381 (0.043)    | 0 (0.000) |     4.67 | ayy, brett, jason, nooz, slump       |
|           12 |     3781 | 2024-10-05 | BOSS               | L   | 0.222      | -            | -                | -                | -         |    -2.62 | brett, jason, nooz, slump, Wolffe    |
|           11 |     3783 | 2024-10-05 | Legacy             | W   | 0.221      | 0.371        | 0.033 (0.003)    | 0.622 (0.051)    | 0 (0.000) |     4.02 | brett, consti, jason, slump, Wolffe  |
|           10 |     3814 | 2024-10-04 | Timbermen          | W   | 0.214      | -            | -                | -                | 0 (0.000) |     1.13 | brett, jason, nooz, slump, Wolffe    |
|            9 |     3932 | 2024-10-01 | Chill Guys         | W   | 0.195      | 0.371        | 0.003 (0.000)    | 0.318 (0.023)    | 0 (0.000) |     1.86 | brett, jason, nooz, slump, Wolffe    |
|            8 |     4242 | 2024-09-23 | LAG Gaming         | W   | 0.142      | 0.477        | 0.001 (0.000)    | 0.026 (0.002)    | -         |     1.18 | ayy, brett, jason, nooz, slump       |
|            7 |     4246 | 2024-09-23 | LAG Gaming         | W   | 0.142      | 0.477        | 0.001 (0.000)    | -                | -         |     1.19 | ayy, brett, jason, nooz, slump       |
|            6 |     4283 | 2024-09-22 | NRG                | L   | 0.133      | -            | -                | -                | -         |    -0.97 | brett, C4LLM3SU3, jason, nooz, slump |
|            5 |     4309 | 2024-09-21 | Legacy             | W   | 0.128      | 0.303        | 0.033 (0.001)    | 0.622 (0.024)    | -         |     2.21 | ayy, brett, jason, nooz, slump       |
|            4 |     4798 | 2024-09-04 | Bad News Capybaras | W   | 0.015      | -            | -                | -                | -         |     0.15 | ayy, brett, jason, nooz, slump       |
|            3 |     4799 | 2024-09-04 | Bad News Capybaras | W   | 0.015      | -            | -                | -                | -         |     0.15 | ayy, brett, jason, nooz, slump       |
|            2 |     4828 | 2024-09-03 | Legacy             | L   | 0.009      | -            | -                | -                | -         |    -0.12 | ayy, brett, jason, nooz, slump       |
|            1 |     4830 | 2024-09-03 | Legacy             | L   | 0.008      | -            | -                | -                | -         |    -0.12 | ayy, brett, jason, nooz, slump       |

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
