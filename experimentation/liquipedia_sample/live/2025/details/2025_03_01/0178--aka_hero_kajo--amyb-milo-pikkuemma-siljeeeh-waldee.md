### Roster Details<br />
Team Name: AKA HERO KAJO<br />
Roster: amyb, miLo, pikkuemma, Siljeeeh, Waldee<br />
Global Rank: [178](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [131]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  727.1<br />
<br />
Final Rank Value (727.1) = Starting Rank Value (743.7) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.7
- 400 + ( ( 0.175 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 743.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      560 | 2025-02-06 | Also                       | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.216 (0.031)    | 0 (0.000) |    11.82 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|           12 |      590 | 2025-02-05 | Elite Klan Violet          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     4.12 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|           11 |      679 | 2025-01-31 | SAW Myst                   | L   | 1.000      | -            | -                | -                | -         |   -24.28 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|           10 |     1302 | 2024-12-14 | Nomercy (Female team)      | L   | 0.686      | -            | -                | -                | -         |   -12.55 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|            9 |     1600 | 2024-12-08 | Nomercy (Female team)      | L   | 0.646      | -            | -                | -                | -         |   -12.51 | amyb, miLo, pikkuemma, tinjau, Waldee   |
|            8 |     1677 | 2024-12-07 | Permitta W                 | W   | 0.640      | 0.250        | 0.003 (0.000)    | 0.189 (0.030)    | 0 (0.000) |     6.45 | amyb, miLo, pikkuemma, tinjau, Waldee   |
|            7 |     1679 | 2024-12-07 | Needachance                | W   | 0.639      | 0.250        | 0.000 (0.000)    | 0.035 (0.006)    | 0 (0.000) |     2.39 | amyb, miLo, pikkuemma, tinjau, Waldee   |
|            6 |     2101 | 2024-11-30 | Take Flyte Female          | L   | 0.593      | -            | -                | -                | -         |   -10.72 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|            5 |     2105 | 2024-11-30 | Elite Klan Violet          | W   | 0.593      | 0.250        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     2.11 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|            4 |     3989 | 2024-10-27 | Ex-Astralis Women          | W   | 0.365      | 0.301        | 0.010 (0.001)    | 0.094 (0.010)    | 1 (0.365) |     5.63 | amyb, miLo, Pikkuems, Siljeeeh, Waldee  |
|            3 |     4001 | 2024-10-27 | Team Sweden (Female team)  | W   | 0.364      | 0.301        | 0.007 (0.001)    | 0.043 (0.005)    | 1 (0.364) |     3.85 | amyb, miLo, Pikkuems, Siljeeeh, Waldee  |
|            2 |     4038 | 2024-10-26 | Team Iceland (Female team) | W   | 0.359      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.359) |     1.37 | amyb, miLo, Pikkuems, Siljeeeh, Waldee  |
|            1 |     4075 | 2024-10-26 | Ex-Astralis Women          | W   | 0.357      | 0.301        | 0.010 (0.001)    | 0.094 (0.010)    | 1 (0.357) |     5.71 | amyb, miLo, Pikkuems, Siljeeeh, Waldee  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,364.25)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.646 | $250.00        | $161.46         |
| 2024-10-27 |      0.365 | $3,295.33      | $1,202.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
