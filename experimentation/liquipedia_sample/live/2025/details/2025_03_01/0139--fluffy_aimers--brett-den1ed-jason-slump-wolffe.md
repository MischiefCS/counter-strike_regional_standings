### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [139](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  773.9<br />
<br />
Final Rank Value (773.9) = Starting Rank Value (797.5) + Head To Head Adjustments (-23.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.5
- 400 + ( ( 0.202 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 797.5


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
|           33 |     1276 | 2024-12-14 | Party Astronauts   | L   | 0.688      | -            | -                | -                | -         |   -12.23 | brett, den1ed, jason, slump, Wolffe  |
|           32 |     1590 | 2024-12-08 | BOSS               | L   | 0.647      | -            | -                | -                | -         |    -7.35 | brett, jason, nooz, slump, Wolffe    |
|           31 |     1637 | 2024-12-07 | Party Astronauts   | W   | 0.642      | 0.384        | 0.008 (0.002)    | 0.410 (0.101)    | 1 (0.642) |     8.71 | brett, jason, nooz, slump, Wolffe    |
|           30 |     1647 | 2024-12-07 | Bad News Capybaras | W   | 0.642      | 0.384        | 0.001 (0.000)    | 0.127 (0.031)    | 1 (0.642) |     6.23 | brett, jason, nooz, slump, Wolffe    |
|           29 |     1668 | 2024-12-07 | What's for Dinner  | W   | 0.640      | -            | -                | -                | 1 (0.640) |     2.11 | brett, jason, nooz, slump, Wolffe    |
|           28 |     1704 | 2024-12-06 | ROOMBA PEEK        | L   | 0.636      | -            | -                | -                | -         |   -15.94 | brett, jason, nooz, slump, Wolffe    |
|           27 |     4538 | 2024-10-15 | BOSS               | L   | 0.289      | -            | -                | -                | -         |    -3.25 | ayy, brett, jason, nooz, slump       |
|           26 |     4624 | 2024-10-13 | Fisher College     | L   | 0.275      | -            | -                | -                | -         |    -4.74 | brett, jason, nooz, slump, Wolffe    |
|           25 |     4625 | 2024-10-13 | InControl          | W   | 0.274      | 0.262        | 0.001 (0.000)    | 0.091 (0.007)    | 0 (0.000) |     2.39 | brett, jason, nooz, slump, Wolffe    |
|           24 |     4673 | 2024-10-12 | Final Form         | W   | 0.268      | 0.262        | -                | 0.076 (0.005)    | 0 (0.000) |     2.22 | brett, jason, nooz, slump, Wolffe    |
|           23 |     4676 | 2024-10-12 | MCS Gaming         | W   | 0.268      | 0.262        | 0.003 (0.000)    | 0.173 (0.012)    | 0 (0.000) |     2.39 | brett, jason, nooz, slump, Wolffe    |
|           22 |     4678 | 2024-10-12 | Team Aether        | W   | 0.268      | -            | -                | -                | 0 (0.000) |     1.45 | brett, jason, nooz, slump, Wolffe    |
|           21 |     4680 | 2024-10-12 | Holly Molly        | W   | 0.268      | -            | -                | -                | 0 (0.000) |     0.85 | brett, jason, nooz, slump, Wolffe    |
|           20 |     4686 | 2024-10-12 | Final Form         | L   | 0.267      | -            | -                | -                | -         |    -6.25 | brett, jason, nooz, slump, Wolffe    |
|           19 |     4804 | 2024-10-09 | Chill Guys         | L   | 0.249      | -            | -                | -                | -         |    -5.44 | ayy, brett, jason, nooz, slump       |
|           18 |     4810 | 2024-10-09 | Chill Guys         | L   | 0.249      | -            | -                | -                | -         |    -5.54 | ayy, brett, jason, nooz, slump       |
|           17 |     4863 | 2024-10-08 | Timbermen          | L   | 0.242      | -            | -                | -                | -         |    -4.87 | ayy, brett, jason, nooz, slump       |
|           16 |     4869 | 2024-10-08 | Timbermen          | W   | 0.242      | 0.477        | 0.011 (0.001)    | 0.175 (0.020)    | 0 (0.000) |     2.80 | ayy, brett, jason, nooz, slump       |
|           15 |     4926 | 2024-10-07 | BOSS               | L   | 0.236      | -            | -                | -                | -         |    -2.85 | ayy, brett, jason, nooz, slump       |
|           14 |     4928 | 2024-10-07 | BOSS               | W   | 0.235      | 0.477        | 0.014 (0.002)    | 0.308 (0.035)    | 0 (0.000) |     4.64 | ayy, brett, jason, nooz, slump       |
|           13 |     5029 | 2024-10-05 | BOSS               | L   | 0.222      | -            | -                | -                | -         |    -2.65 | brett, jason, nooz, slump, Wolffe    |
|           12 |     5033 | 2024-10-05 | Legacy             | W   | 0.221      | 0.371        | 0.036 (0.003)    | 0.598 (0.049)    | -         |     4.32 | brett, consti, jason, slump, Wolffe  |
|           11 |     5122 | 2024-10-04 | Timbermen          | W   | 0.214      | -            | -                | -                | -         |     1.10 | brett, jason, nooz, slump, Wolffe    |
|           10 |     5282 | 2024-10-01 | Chill Guys         | W   | 0.195      | 0.371        | 0.003 (0.000)    | 0.344 (0.025)    | -         |     1.83 | brett, jason, nooz, slump, Wolffe    |
|            9 |     5861 | 2024-09-23 | LAG Gaming         | W   | 0.142      | 0.477        | 0.001 (0.000)    | -                | -         |     1.15 | ayy, brett, jason, nooz, slump       |
|            8 |     5865 | 2024-09-23 | LAG Gaming         | W   | 0.142      | -            | -                | -                | -         |     1.16 | ayy, brett, jason, nooz, slump       |
|            7 |     5939 | 2024-09-22 | NRG                | L   | 0.134      | -            | -                | -                | -         |    -0.99 | brett, C4LLM3SU3, jason, nooz, slump |
|            6 |     5985 | 2024-09-21 | Legacy             | W   | 0.128      | 0.303        | 0.036 (0.001)    | 0.598 (0.023)    | -         |     2.36 | ayy, brett, jason, nooz, slump       |
|            5 |     6038 | 2024-09-20 | MIGHT              | W   | 0.122      | -            | -                | -                | -         |     1.54 | brett, C4LLM3SU3, jason, nooz, slump |
|            4 |     6040 | 2024-09-20 | VitaPLUR           | W   | 0.122      | -            | -                | -                | -         |     0.60 | brett, C4LLM3SU3, jason, nooz, slump |
|            3 |     6046 | 2024-09-20 | OutGoing eSports   | W   | 0.122      | -            | -                | -                | -         |     0.37 | brett, C4LLM3SU3, jason, nooz, slump |
|            2 |     7036 | 2024-09-04 | Bad News Capybaras | W   | 0.016      | -            | -                | -                | -         |     0.16 | ayy, brett, jason, nooz, slump       |
|            1 |     7037 | 2024-09-04 | Bad News Capybaras | W   | 0.015      | -            | -                | -                | -         |     0.15 | ayy, brett, jason, nooz, slump       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,654.70)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.321 | $2,000.00      | $642.78         |
| 2024-10-13 |      0.275 | $450.00        | $123.59         |
| 2024-10-05 |      0.222 | $4,000.00      | $888.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
