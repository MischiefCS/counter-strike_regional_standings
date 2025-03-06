### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, FL4MUS, ICY<br />
Global Rank: [10](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1367.1<br />
<br />
Final Rank Value (1367.1) = Starting Rank Value (1368.1) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.757[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.435[<sup>2</sup>](#table1)

The average of these factors is 0.369<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1368.1
- 400 + ( ( 0.369 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1368.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      173 | 2025-02-18 | MOUZ        | L   | 0.084      | -            | -                | -                | -         |    -0.07 | electroNic, fame, FL1T, FL4MUS, ICY |
|            5 |      184 | 2025-02-17 | PaiN Gaming | L   | 0.078      | -            | -                | -                | -         |    -0.41 | electroNic, fame, FL1T, FL4MUS, ICY |
|            4 |      215 | 2025-02-16 | Wildcard    | W   | 0.069      | 1.000        | 0.227 (0.016)    | 0.086 (0.006)    | 1 (0.069) |     0.39 | electroNic, fame, FL1T, FL4MUS, ICY |
|            3 |      248 | 2025-02-15 | Complexity  | W   | 0.063      | 1.000        | 0.227 (0.014)    | 0.106 (0.007)    | 1 (0.063) |     0.39 | electroNic, fame, FL1T, FL4MUS, ICY |
|            2 |      281 | 2025-02-14 | 3DMAX       | L   | 0.056      | -            | -                | -                | -         |    -0.98 | electroNic, fame, FL1T, FL4MUS, ICY |
|            1 |      490 | 2025-02-07 | Team Spirit | L   | 0.012      | -            | -                | -                | -         |    -0.30 | electroNic, fame, FL1T, FL4MUS, ICY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,674.25)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.48) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $31,250.00     | $3,696.47       |
| 2025-02-09 |      0.024 | $40,000.00     | $977.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
