### Roster Details<br />
Team Name: KZ Esports<br />
Roster: CHEL00, kopi, moiss, SanduroSenshi, spacepush<br />
Global Rank: [225](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [28]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  713.7<br />
<br />
Final Rank Value (713.7) = Starting Rank Value (720.5) + Head To Head Adjustments (-6.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.5
- 400 + ( ( 0.155 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 720.5


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
|            7 |     1483 | 2024-12-15 | 4z              | L   | 0.700      | -            | -                | -                | -         |   -12.34 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            6 |     2008 | 2024-12-05 | 4z              | W   | 0.633      | 0.310        | 0.005 (0.001)    | 0.153 (0.030)    | 0 (0.000) |     8.57 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            5 |     2100 | 2024-12-03 | REDPack Esports | W   | 0.620      | 0.310        | 0.002 (0.000)    | 0.092 (0.018)    | 0 (0.000) |     7.44 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            4 |     2281 | 2024-11-30 | T-Torturers     | W   | 0.601      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.601) |     4.90 | CHEL00, chujoi, kopi, moiss, spacepush        |
|            3 |     2307 | 2024-11-30 | C4PYBARAS       | W   | 0.600      | 0.310        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.91 | CHEL00, kopi, moiss, SanduroSenshi, spacepush |
|            2 |     2826 | 2024-11-21 | Hypewrld        | L   | 0.539      | -            | -                | -                | -         |    -9.46 | CHEL00, chujoi, kopi, moiss, spacepush        |
|            1 |     2909 | 2024-11-20 | SkyFury         | L   | 0.533      | -            | -                | -                | -         |    -8.80 | CHEL00, chujoi, kopi, moiss, spacepush        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,941.88)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.700 | $1,200.00      | $839.97         |
| 2024-11-30 |      0.601 | $3,496.03      | $2,101.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
