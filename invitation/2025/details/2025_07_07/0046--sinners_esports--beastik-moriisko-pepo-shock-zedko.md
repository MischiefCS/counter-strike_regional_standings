### Roster Details<br />
Team Name: SINNERS Esports<br />
Roster: beastik, MoriiSko, Pepo, SHOCK, ZEDKO<br />
Global Rank: [46](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [30]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  691.7<br />
<br />
Final Rank Value (691.7) = Starting Rank Value (706.0) + Head To Head Adjustments (-14.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.0
- 400 + ( ( 0.124 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 706.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      207 | 2025-02-16 | ECSTATIC          | L   | 0.258      | -            | -                | -                | -         |    -5.88 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            9 |      250 | 2025-02-15 | Sashi Esport      | L   | 0.249      | -            | -                | -                | -         |    -5.41 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            8 |      312 | 2025-02-12 | ALASKA            | W   | 0.231      | 0.435        | 0.017 (0.002)    | 0.519 (0.052)    | 0 (0.000) |     6.15 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            7 |      399 | 2025-02-09 | Fire Flux Esports | L   | 0.212      | -            | -                | -                | -         |    -4.57 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            6 |      502 | 2025-02-07 | Monte             | W   | 0.197      | 0.435        | 0.000 (0.000)    | 0.348 (0.030)    | 0 (0.000) |     1.89 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            5 |      539 | 2025-02-05 | OG                | L   | 0.185      | -            | -                | -                | -         |    -4.02 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            4 |      576 | 2025-02-04 | Alliance          | L   | 0.178      | -            | -                | -                | -         |    -3.98 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            3 |      608 | 2025-02-01 | GTZ.ESPORTS       | W   | 0.159      | 0.435        | 0.000 (0.000)    | 0.228 (0.016)    | 0 (0.000) |     1.52 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            2 |      696 | 2025-01-11 | Wildcard          | L   | 0.018      | -            | -                | -                | -         |    -0.05 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            1 |      705 | 2025-01-10 | KONO.ECF          | W   | 0.009      | 0.417        | 0.000 (0.000)    | 0.383 (0.002)    | 0 (0.000) |     0.05 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($119.44)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      0.024 | $5,000.00      | $119.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
