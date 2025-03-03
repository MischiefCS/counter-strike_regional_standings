### Roster Details<br />
Team Name: Five Handsome Guys<br />
Roster: BoGod, DeathFine, 偶然, 微笑, 郑州理智king<br />
Global Rank: [183](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [22]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  684.5<br />
<br />
Final Rank Value (684.5) = Starting Rank Value (680.6) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.6
- 400 + ( ( 0.144 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 680.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      700 | 2025-02-06 | Believe.        | L   | 1.000      | -            | -                | -                | -         |   -22.53 | BoGod, DeathFine, 偶然, 微笑, 郑州理智king      |
|            6 |      702 | 2025-02-06 | Butcher Legion  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.056 (0.008)    | 0 (0.000) |     5.14 | BoGod, DeathFine, 偶然, 微笑, 郑州理智king      |
|            5 |      716 | 2025-02-05 | Change The Game | W   | 1.000      | 0.143        | 0.061 (0.009)    | 0.263 (0.038)    | 0 (0.000) |    18.25 | BoGod, DeathFine, 偶然, 微笑, 郑州理智king      |
|            4 |     2959 | 2024-11-09 | FengDa Gaming   | L   | 0.451      | -            | -                | -                | -         |    -6.96 | BoGod, DeathFine, mONESY, RosyClou9, 微笑 |
|            3 |     2968 | 2024-11-09 | Hunt Now        | W   | 0.451      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.62 | BoGod, DeathFine, mONESY, RosyClou9, 微笑 |
|            2 |     3420 | 2024-10-27 | Team Xinyang    | W   | 0.365      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 1 (0.365) |     4.45 | BoGod, DeathFine, Zpy, 微笑, 暴躁bb         |
|            1 |     3433 | 2024-10-26 | Team Zhengzhou  | W   | 0.362      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.362) |     1.96 | BoGod, DeathFine, Zpy, 微笑, 暴躁bb         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($217.30)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-10 |      0.457 | $139.29        | $63.69          |
| 2024-10-27 |      0.365 | $421.19        | $153.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
