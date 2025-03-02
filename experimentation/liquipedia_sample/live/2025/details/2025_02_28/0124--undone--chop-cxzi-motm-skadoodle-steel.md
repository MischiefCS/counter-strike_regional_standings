### Roster Details<br />
Team Name: Undone<br />
Roster: chop, cxzi, motm, Skadoodle, steel<br />
Global Rank: [124](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [22]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  827.4<br />
<br />
Final Rank Value (827.4) = Starting Rank Value (815.2) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.245[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 815.2
- 400 + ( ( 0.201 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 815.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     1524 | 2024-12-14 | Bad News Capybaras      | W   | 0.695      | 0.143        | 0.001 (0.000)    | 0.224 (0.022)    | 0 (0.000) |     6.85 | chop, cxzi, motm, Skadoodle, steel |
|           21 |     1605 | 2024-12-13 | SUPER EVIL GANG         | W   | 0.689      | 0.143        | 0.011 (0.001)    | 0.432 (0.043)    | 0 (0.000) |     9.65 | chop, cxzi, motm, Skadoodle, steel |
|           20 |     1611 | 2024-12-13 | Make Your Mind          | L   | 0.689      | -            | -                | -                | -         |   -12.03 | chop, cxzi, motm, Skadoodle, steel |
|           19 |     1615 | 2024-12-13 | Guangdong Tigers        | W   | 0.688      | 0.143        | 0.000 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     1.88 | chop, cxzi, motm, Skadoodle, steel |
|           18 |     1620 | 2024-12-13 | OutGoing eSports        | W   | 0.688      | 0.143        | 0.002 (0.000)    | 0.061 (0.006)    | 0 (0.000) |     6.17 | chop, cxzi, motm, Skadoodle, steel |
|           17 |     1724 | 2024-12-11 | Bad News Capybaras      | W   | 0.675      | 0.143        | 0.001 (0.000)    | 0.224 (0.022)    | 0 (0.000) |     6.63 | chop, cxzi, motm, Skadoodle, steel |
|           16 |     1769 | 2024-12-10 | InControl               | W   | 0.668      | -            | -                | -                | 0 (0.000) |     1.77 | chop, cxzi, motm, Skadoodle, steel |
|           15 |     1857 | 2024-12-08 | Nouns Esports           | L   | 0.653      | -            | -                | -                | -         |    -5.89 | chop, cxzi, motm, steel, taggy     |
|           14 |     1901 | 2024-12-07 | MIGHT                   | W   | 0.649      | 0.384        | 0.002 (0.001)    | 0.276 (0.069)    | 1 (0.649) |     8.27 | chop, cxzi, motm, steel, taggy     |
|           13 |     1910 | 2024-12-07 | Fisher College          | W   | 0.648      | 0.384        | 0.009 (0.002)    | 0.202 (0.050)    | 1 (0.648) |    10.40 | chop, cxzi, motm, steel, taggy     |
|           12 |     1918 | 2024-12-07 | NRG                     | L   | 0.647      | -            | -                | -                | -         |    -3.50 | chop, cxzi, motm, steel, taggy     |
|           11 |     1967 | 2024-12-06 | Anti-Eco Club           | W   | 0.642      | -            | -                | -                | 1 (0.642) |     1.98 | chop, cxzi, motm, steel, taggy     |
|           10 |     2001 | 2024-12-05 | SUPER EVIL GANG         | L   | 0.635      | -            | -                | -                | -         |   -11.04 | chop, cxzi, motm, Skadoodle, steel |
|            9 |     2142 | 2024-12-02 | Make Your Mind          | L   | 0.615      | -            | -                | -                | -         |   -11.73 | chop, cxzi, motm, Skadoodle, steel |
|            8 |     2209 | 2024-12-01 | OutGoing eSports        | W   | 0.609      | 0.372        | 0.002 (0.000)    | 0.061 (0.014)    | 0 (0.000) |     5.79 | chop, cxzi, motm, Skadoodle, steel |
|            7 |     2283 | 2024-11-30 | Party Astronauts        | L   | 0.601      | -            | -                | -                | -         |    -8.60 | chop, cxzi, motm, skadoodle, steel |
|            6 |     2376 | 2024-11-29 | Vibe (American team)    | W   | 0.595      | 0.372        | 0.000 (0.000)    | 0.077 (0.017)    | -         |     4.38 | chop, cxzi, motm, Skadoodle, steel |
|            5 |     2635 | 2024-11-23 | BLUEJAYS                | L   | 0.553      | -            | -                | -                | -         |    -5.93 | chop, cxzi, motm, Skadoodle, steel |
|            4 |     2946 | 2024-11-19 | Getting Info            | W   | 0.528      | 0.384        | 0.010 (0.002)    | 0.626 (0.127)    | -         |     9.27 | chop, cxzi, motm, skadoodle, steel |
|            3 |     5727 | 2024-09-29 | Party Astronauts        | L   | 0.188      | -            | -                | -                | -         |    -2.86 | BeaKie, chop, cxzi, motm, stamina  |
|            2 |     6522 | 2024-09-18 | Mythic                  | W   | 0.114      | -            | -                | -                | -         |     0.54 | BeaKie, chop, cxzi, motm, stamina  |
|            1 |     6656 | 2024-09-16 | Penance (American Team) | W   | 0.101      | -            | -                | -                | -         |     0.28 | BeaKie, chop, cxzi, motm, stamina  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($819.07)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.655 | $1,250.00      | $819.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
