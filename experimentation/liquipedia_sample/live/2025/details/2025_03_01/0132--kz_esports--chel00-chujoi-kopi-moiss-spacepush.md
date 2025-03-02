### Roster Details<br />
Team Name: KZ Esports<br />
Roster: CHEL00, chujoi, kopi, moiss, spacepush<br />
Global Rank: [132](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  777.7<br />
<br />
Final Rank Value (777.7) = Starting Rank Value (771.1) + Head To Head Adjustments (6.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 771.1
- 400 + ( ( 0.188 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 771.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      648 | 2025-02-02 | Team UFG        | W   | 1.000      | 0.305        | 0.003 (0.001)    | 0.061 (0.019)    | 1 (1.000) |    12.77 | CHEL00, chujoi, kopi, moiss, spacepush        |
|            6 |     1230 | 2024-12-15 | 4z              | L   | 0.694      | -            | -                | -                | -         |   -14.20 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            5 |     1754 | 2024-12-05 | 4z              | W   | 0.626      | 0.310        | 0.004 (0.001)    | 0.156 (0.030)    | 0 (0.000) |     6.63 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            4 |     1857 | 2024-12-03 | REDPack Esports | W   | 0.613      | 0.310        | 0.001 (0.000)    | 0.094 (0.018)    | 0 (0.000) |     5.73 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            3 |     2050 | 2024-11-30 | T-Torturers     | W   | 0.595      | 0.305        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.595) |     3.85 | CHEL00, chujoi, kopi, moiss, spacepush        |
|            2 |     2065 | 2024-11-30 | C4PYBARAS       | W   | 0.594      | 0.310        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.18 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            1 |     2664 | 2024-11-20 | SkyFury         | L   | 0.527      | -            | -                | -                | -         |   -10.27 | CHEL00, chujoi, kopi, moiss, spacepush        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,328.53)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-02 |      1.000 | $3,496.03      | $3,496.03       |
| 2024-12-15 |      0.694 | $1,200.00      | $832.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
